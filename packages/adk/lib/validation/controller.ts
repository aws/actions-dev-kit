import { Controller, Logger } from '@nestjs/common';
import { ActionValidationRules } from './rule';
import { ValidationProps } from './model';

@Controller()
export class ValidationController {
    constructor(private actionValidationRules: ActionValidationRules) {
    }

    validateAction(props: ValidationProps) {
        if (this.actionValidationRules.apply(props)) {
            Logger.log('Validation Passed');
            return 0;
        } else {
            Logger.error('Validation Failed');
            return 1;
        }
    }
}