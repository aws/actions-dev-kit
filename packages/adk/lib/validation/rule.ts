import { Injectable, Logger, Scope } from '@nestjs/common';
import yaml from 'js-yaml';
import fs from 'fs';
import { SchemaValidator } from './validator/schema';
import { StructureValidator } from './validator/structure';
import { AndValidator, ValidationContext, ValidationProps } from './model';

@Injectable({ scope: Scope.DEFAULT })
export class ActionValidationRules {

    constructor(private schemaValidator: SchemaValidator, private structureValidator: StructureValidator) {

    }

    apply(props: ValidationProps) {
        const encoding = 'utf-8';
        if (props.file != undefined) {
            const input = yaml.load(fs.readFileSync(props.file, { encoding: encoding }));
            const validationResult = new AndValidator(this.schemaValidator, this.structureValidator).validate(new ValidationContext(props, input));
            if (!validationResult.pass()) {
                Logger.error(validationResult.errors());
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
}