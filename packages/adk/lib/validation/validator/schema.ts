import { validate } from 'jsonschema';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { ActionSchemas, SchemaType, ValidationContext, ValidationError, ValidationResult, Validator } from '../model';

export interface SchemaValidator extends Validator{

}

@Injectable({ scope: Scope.DEFAULT })
export class JsonSchemaValidator implements SchemaValidator {
    validate(context: ValidationContext): ValidationResult {
        try {
            const validatorResult = validate(context.instance, ActionSchemas.get(context.props.schemaType ?? SchemaType.Caws));
            return new ValidationResult(validatorResult.errors.map(i => i.toString()));
        } catch (e) {
            Logger.error(e);
            throw new ValidationError(`${e}`);
        }
    }
}
