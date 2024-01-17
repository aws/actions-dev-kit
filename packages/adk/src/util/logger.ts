import { LoggerService } from '@nestjs/common';
import chalk from 'chalk';

export class ConsoleLogger implements LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any, ..._optionalParams: any[]) {
    console.log(chalk.green(message));
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ..._optionalParams: any[]) {
    console.error(chalk.red(message));
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ..._optionalParams: any[]) {
    console.warn(chalk.yellow(message));
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ..._optionalParams: any[]) {
    console.debug(chalk.green(message));
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ..._optionalParams: any[]) {
    console.debug(chalk.green(message));
  }
}
