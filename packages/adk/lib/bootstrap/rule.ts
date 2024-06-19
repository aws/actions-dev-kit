import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import yaml from 'js-yaml';
import fs from 'fs';
import { SCHEMA_VALIDATOR, SchemaValidator } from '../validation/validator/schema';
import { ValidationContext, ValidationProps } from '../validation/model';
import { FILE_GENERATOR_DESTINATION_FILES } from './generators/fscopy';
import { LICENSE_GENERATOR_DESTINATION_FILES } from './generators/license';
import { PACKAGE_JSON_GENERATOR_DESTINATION_FILES } from './generators/packagejson';
import { README_GENERATOR_DESTINATION_FILES } from './generators/readme';
import { RUNTIME_CODE_DESTINATION_FILES } from './generators/runtime';

@Injectable({ scope: Scope.DEFAULT })
export class ActionPreValidationRules {

    constructor(@Inject(SCHEMA_VALIDATOR) private schemaValidator: SchemaValidator) {

    }

    apply(props: ValidationProps) {
        return this.validateSchema(props) && this.validateCurrentFolder(props);
    }

    validateSchema(props: ValidationProps) {
        if (props.file == undefined) {
            return false;
        }

        const encoding = 'utf-8';
        const input = yaml.load(fs.readFileSync(props.file, { encoding: encoding }));
        const validationResult = this.schemaValidator.validate(new ValidationContext(props, input));
        if (!validationResult.pass()) {
            Logger.error(validationResult.errors());
            return false;
        }
        return true;
    }

    validateCurrentFolder(props: ValidationProps) {
        if (props.overrideFiles) {
            return true;
        }

        const combined_file_arr = [FILE_GENERATOR_DESTINATION_FILES,
            LICENSE_GENERATOR_DESTINATION_FILES,
            PACKAGE_JSON_GENERATOR_DESTINATION_FILES,
            README_GENERATOR_DESTINATION_FILES,
            RUNTIME_CODE_DESTINATION_FILES];
        const files_arr = Array.prototype.concat(...combined_file_arr);

        const errors = [];
        files_arr.forEach((file) => {
            if (fs.existsSync(file)) {
                Logger.error(`File '${file}' already exists`);
                errors.push(`File '${file}' already exists`);
            }
        });

        if (errors.length > 0) {
            Logger.error(' => Either bootstrap in an empty directory or use \'adk bootstrap -o\' to override existing files');
        }
        return errors.length <= 0;
    }

}
