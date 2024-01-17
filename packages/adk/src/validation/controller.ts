import { Controller } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import chalk = require('chalk');
import { ValidationProps } from './model';
import { ActionValidationRules } from './rule';

@Controller()
export class ValidationController {
  constructor(private actionValidationRules: ActionValidationRules) {}

  validateAction(props: ValidationProps) {
    if (this.actionValidationRules.apply(props)) {
      console.log(chalk.green('Validation Passed'));
      return 0;
    } else {
      console.log(chalk.red('Validation Failed'));
      return 1;
    }
  }
}
