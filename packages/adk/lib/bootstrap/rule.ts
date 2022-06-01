import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import yaml from 'js-yaml';
import fs from 'fs';
import { SCHEMA_VALIDATOR, SchemaValidator } from '../validation/validator/schema';
import { ValidationContext, ValidationProps } from '../validation/model';

@Injectable({ scope: Scope.DEFAULT })
export class ActionPreValidationRules {

    constructor(@Inject(SCHEMA_VALIDATOR) private schemaValidator: SchemaValidator) {

    }

    apply(props: ValidationProps) {
        const encoding = 'utf-8';
        if (props.file != undefined) {
            const input = yaml.load(fs.readFileSync(props.file, { encoding: encoding }));
            const validationResult = this.schemaValidator.validate(new ValidationContext(props, input));
            if (!validationResult.pass()) {
                Logger.error(validationResult.errors());
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}
