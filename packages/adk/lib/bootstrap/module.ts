import { Module } from '@nestjs/common';
import { BootstrapController } from './controller';
import { ActionBootstrapGenerators } from './generators';
import { ActionPreValidationRules } from './rule';
import { JsonSchemaValidator, SCHEMA_VALIDATOR } from '../validation/validator/schema';
import { TemplateGenerator, TEMPLATE_GENERATOR } from './generators/template';
import { BootstrapCodeGenerator, CODE_GENERATOR } from './generators/code';
import { PackageJsonGenerator, PACKAGE_JSON_GENERATOR } from './generators/packagejson';
import { FileCopyGenerator, FILE_COPY_GENERATOR } from './generators/fscopy';
import { ReadmeGenerator, README_GENERATOR } from './generators/readme';
import { RuntimeCodeGenerator, RUNTIME_CODE_GENERATOR } from './generators/runtime';

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
        ActionBootstrapGenerators,
        {
            provide: TEMPLATE_GENERATOR,
            useClass: TemplateGenerator,
        },
    ],
})
export class BootstrapModule {

}
