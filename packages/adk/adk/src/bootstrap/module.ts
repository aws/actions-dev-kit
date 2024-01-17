import { Module } from '@nestjs/common';
import { BootstrapController } from './controller';
import { ActionBootstrapGenerators } from './generators';
import { BootstrapCodeGenerator, CODE_GENERATOR } from './generators/code';
import { FileCopyGenerator, FILE_COPY_GENERATOR } from './generators/fscopy';
import { LICENSE_GENERATOR, LicenseGenerator } from './generators/license';
import { PackageJsonGenerator, PACKAGE_JSON_GENERATOR } from './generators/packagejson';
import { ReadmeGenerator, README_GENERATOR } from './generators/readme';
import { RuntimeCodeGenerator, RUNTIME_CODE_GENERATOR } from './generators/runtime';
import { TemplateGenerator, TEMPLATE_GENERATOR } from './generators/template';
import { WorkflowGenerator, WORKFLOW_GENERATOR } from './generators/workflow';
import { ActionPreValidationRules } from './rule';
import { JsonSchemaValidator, SCHEMA_VALIDATOR } from '../validation/validator/schema';

@Module({
  controllers: [BootstrapController],
  providers: [
    ActionPreValidationRules,
    {
      provide: SCHEMA_VALIDATOR,
      useClass: JsonSchemaValidator,
    },
    BootstrapCodeGenerator,
    {
      provide: PACKAGE_JSON_GENERATOR,
      useClass: PackageJsonGenerator,
    },
    {
      provide: RUNTIME_CODE_GENERATOR,
      useClass: RuntimeCodeGenerator,
    },
    TemplateGenerator,
    {
      provide: CODE_GENERATOR,
      useClass: BootstrapCodeGenerator,
    },
    {
      provide: FILE_COPY_GENERATOR,
      useClass: FileCopyGenerator,
    },
    {
      provide: README_GENERATOR,
      useClass: ReadmeGenerator,
    },
    {
      provide: LICENSE_GENERATOR,
      useClass: LicenseGenerator,
    },
    {
      provide: WORKFLOW_GENERATOR,
      useClass: WorkflowGenerator,
    },
    ActionBootstrapGenerators,
    {
      provide: TEMPLATE_GENERATOR,
      useClass: TemplateGenerator,
    },
  ],
})
export class BootstrapModule {}
