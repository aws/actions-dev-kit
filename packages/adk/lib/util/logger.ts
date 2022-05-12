import chalk from 'chalk';

import { LoggerService } from '@nestjs/common';

export class ConsoleLogger implements LoggerService {
    /**
   * Write a 'log' level log.
   */
    log(message: any, ...optionalParams: any[]) {
        console.log(chalk.green(message));
    }

    /**
   * Write an 'error' level log.
   */
    error(message: any, ...optionalParams: any[]) {
        console.error(chalk.red(message));
    }

    /**
   * Write a 'warn' level log.
   */
    warn(message: any, ...optionalParams: any[]) {
        console.warn(chalk.yellow(message));
    }

    /**
   * Write a 'debug' level log.
   */
    debug?(message: any, ...optionalParams: any[]) {
        console.debug(chalk.green(message));
    }

    /**
   * Write a 'verbose' level log.
   */
    verbose?(message: any, ...optionalParams: any[]) {
        console.debug(chalk.green(message));
    }
}