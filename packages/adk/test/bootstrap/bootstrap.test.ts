import { BootstrapController } from '../../lib/bootstrap/controller';
import { ActionPreValidationRules } from '../../lib/bootstrap/rule';
import { GeneratorProps } from '../../lib/bootstrap/model';
import { ActionBootstrapGenerators } from '../../lib/bootstrap/generators';
import { TemplateGenerator } from '../../lib/bootstrap/generators/template';
import { BootstrapCodeGenerator } from '../../lib/bootstrap/generators/code';
import { PackageJsonGenerator } from '../../lib/bootstrap/generators/packagejson';
import { RuntimeCodeGenerator } from '../../lib/bootstrap/generators/runtime';
import { FileCopyGenerator } from '../../lib/bootstrap/generators/fscopy';
import { ReadmeGenerator } from '../../lib/bootstrap/generators/readme';
import { LicenseGenerator } from '../../lib/bootstrap/generators/license';
import { WorkflowGenerator } from '../../lib/bootstrap/generators/workflow';
import { JsonSchemaValidator } from '../../lib/validation/validator/schema';
import { SchemaType } from '../../lib/validation/model';
import fs from 'fs';

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
    const generators = new ActionBootstrapGenerators(new TemplateGenerator(
        codeGen,
        fileCopyGen,
        readMeGen,
        licenseGen,
        workflowGen,
    ));

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

        let generatedSourceCode = jest.mocked(fs.writeFileSync).mock.calls
            .filter((arrayOfCallsWithArguments) => arrayOfCallsWithArguments[0] == 'lib/index.ts')
            .map(callArguments => callArguments[1]);

        expect(generatedSourceCode.toString().includes("// %0Aconsole.log('INJECTED_CODE')%25%0A%0D:%2C")).toBeTruthy();
    });

});
