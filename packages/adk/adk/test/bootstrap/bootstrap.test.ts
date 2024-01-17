import fs from 'fs';
import { BootstrapController } from '../../src/bootstrap/controller';
import { ActionBootstrapGenerators } from '../../src/bootstrap/generators';
import { BootstrapCodeGenerator } from '../../src/bootstrap/generators/code';
import { FileCopyGenerator } from '../../src/bootstrap/generators/fscopy';
import { LicenseGenerator } from '../../src/bootstrap/generators/license';
import { PackageJsonGenerator } from '../../src/bootstrap/generators/packagejson';
import { ReadmeGenerator } from '../../src/bootstrap/generators/readme';
import { RuntimeCodeGenerator } from '../../src/bootstrap/generators/runtime';
import { TemplateGenerator } from '../../src/bootstrap/generators/template';
import { WorkflowGenerator } from '../../src/bootstrap/generators/workflow';
import { GeneratorProps } from '../../src/bootstrap/model';
import { ActionPreValidationRules } from '../../src/bootstrap/rule';
import { SchemaType } from '../../src/validation/model';
import { JsonSchemaValidator } from '../../src/validation/validator/schema';

jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  writeFileSync: jest.fn(),
  mkdirSync: jest.fn(),
  copyFileSync: jest.fn(),
}));

describe('Bootstrap Command Tests', () => {
  const rules = new ActionPreValidationRules(new JsonSchemaValidator());
  const pkgJsonGen = new PackageJsonGenerator();
  const runtimeCodeGen = new RuntimeCodeGenerator();
  const codeGen = new BootstrapCodeGenerator(pkgJsonGen, runtimeCodeGen);
  const fileCopyGen = new FileCopyGenerator();
  const readMeGen = new ReadmeGenerator();
  const licenseGen = new LicenseGenerator();
  const workflowGen = new WorkflowGenerator();
  const generators = new ActionBootstrapGenerators(new TemplateGenerator(codeGen, fileCopyGen, readMeGen, licenseGen, workflowGen));

  const controller = new BootstrapController(rules, generators);

  it('should succeed when bootstrapping with environment required set to true', async () => {
    const file = `${__dirname}/valid_input.yml`;
    const props: GeneratorProps = {
      file: file,
      schemaType: SchemaType.CodeCatalyst,
      templateBasePath: `${__dirname}/../..`,
      language: 'typescript',
    };

    expect(controller.bootstrapAction(props)).toBeDefined();
  });

  it('should succeed when bootstrapping with environment required set to false', async () => {
    const file = `${__dirname}/valid_input_noenv.yml`;
    const props: GeneratorProps = {
      file: file,
      schemaType: SchemaType.CodeCatalyst,
      templateBasePath: `${__dirname}/../..`,
      language: 'typescript',
    };

    expect(controller.bootstrapAction(props)).toBeDefined();
  });

  it('should escape all strings in action.yml', async () => {
    const file = `${__dirname}/valid_input_code_injection.yml`;
    const props: GeneratorProps = {
      file: file,
      schemaType: SchemaType.CodeCatalyst,
      templateBasePath: `${__dirname}/../..`,
      language: 'typescript',
      overrideFiles: true,
    };

    expect(controller.bootstrapAction(props)).toBeDefined();

    let generatedSourceCode = jest
      .mocked(fs.writeFileSync)
      .mock.calls.filter(arrayOfCallsWithArguments => arrayOfCallsWithArguments[0] == 'lib/index.ts')
      .map(callArguments => callArguments[1]);

    expect(generatedSourceCode.toString().includes("// %0Aconsole.log('INJECTED_CODE')%25%0A%0D:,")).toBeTruthy();
  });
});
