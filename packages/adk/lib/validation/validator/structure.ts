import { Injectable, Logger, Scope } from '@nestjs/common';
import { ValidationContext, ValidationResult, Validator } from '../model';
import fs from 'fs';

export const STRUCTURE_VALIDATOR = 'structure_validator';

export interface StructureValidator extends Validator {

}

@Injectable({ scope: Scope.DEFAULT })
export class FileStructureValidator implements StructureValidator {

    validate(context: ValidationContext): ValidationResult {
        const fileName = 'README.md';
        if (!fs.existsSync(fileName)) {
            Logger.warn(`${fileName} does not exist in the current directory`);
        }
        return ValidationResult.empty();
    }
}
