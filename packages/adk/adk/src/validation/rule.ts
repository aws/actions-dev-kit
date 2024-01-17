import fs from 'fs';
import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import yaml from 'js-yaml';
import { AndValidator, ValidationContext, ValidationProps } from './model';
import { SCHEMA_VALIDATOR, SchemaValidator } from './validator/schema';
import { STRUCTURE_VALIDATOR, StructureValidator } from './validator/structure';

@Injectable({ scope: Scope.DEFAULT })
export class ActionValidationRules {
  constructor(
    @Inject(SCHEMA_VALIDATOR) private schemaValidator: SchemaValidator,
    @Inject(STRUCTURE_VALIDATOR) private structureValidator: StructureValidator,
  ) {}

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
      return false;
    }
  }
}
