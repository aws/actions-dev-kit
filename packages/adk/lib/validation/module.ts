import { Module } from '@nestjs/common';
import { ValidationController } from './controller';
import { ActionValidationRules } from './rule';
import { JsonSchemaValidator, SCHEMA_VALIDATOR } from './validator/schema';
import { FileStructureValidator, STRUCTURE_VALIDATOR } from './validator/structure';

@Module({
    controllers: [ValidationController],
    providers: [
        ActionValidationRules,
        {
            provide: SCHEMA_VALIDATOR,
            useClass: JsonSchemaValidator,
        },
        {
            provide: STRUCTURE_VALIDATOR,
            useClass: FileStructureValidator,
        },
    ],
})
export class ValidationModule {
  
}