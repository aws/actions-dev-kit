import { Controller, Logger } from '@nestjs/common';
import { ActionValidationRules } from './rule';
import { ValidationProps } from './model';
import chalk = require('chalk');

@Controller()
export class ValidationController {
    constructor(private actionValidationRules: ActionValidationRules) {
    }

    validateAction(props: ValidationProps) {
        if (this.actionValidationRules.apply(props)) {
            console.log(chalk.green(('Validation Passed')));
            return 0;
        } else {
            console.log(chalk.red(('Validation Failed')));
            return 1;
        }
    }
}