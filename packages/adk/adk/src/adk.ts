import { escape, unknownToBooleanOrFalse, unknownToStringOrUndefined } from '@aws/codecatalyst-adk-utils';
import { INestApplicationContext, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import chalk from 'chalk';
import * as yargscli from 'yargs';
import { AppModule } from './adk.module';
import { BootstrapController } from './bootstrap/controller';
import { handleCommand as init } from './commands/init';
import { ProductInfo } from './types/types';
import { ConsoleLogger } from './util/logger';
import { productName } from './util/product';
import { version as adk_version } from './util/version';
import { ValidationController } from './validation/controller';
import { SchemaType } from './validation/model';

let APP_CONTEXT: INestApplicationContext;
const bootstrap = async (): Promise<INestApplicationContext> => {
  // ensure the app context
  if (!APP_CONTEXT) {
    APP_CONTEXT = await NestFactory.createApplicationContext(AppModule, { logger: false });
  }
  return APP_CONTEXT;
};

async function cliArgs() {
  return yargscli
    .usage('Usage: adk COMMAND')
    .command('bootstrap', 'Bootstraps the current workspace with provided action definition', yargs => {
      return yargs
        .option('file', {
          alias: 'f',
          description: 'the action definition file to be used for bootstrapping workspace',
          demandOption: true,
          default: '.codecatalyst/actions/action.yml',
        })
        .option('override', {
          alias: 'o',
          description: 'If true, overrides existing files',
          default: false,
          type: 'boolean',
        });
    })
    .command('validate', 'Validate the current workspace for Action definition', yargs => {
      return yargs.option('file', {
        alias: 'f',
        description: 'the action file to be validated',
        demandOption: true,
        default: '.codecatalyst/actions/action.yml',
      });
    })
    .command('init', 'Initializes the current workspace with default Action definition', yargs => {
      return yargs
        .option(productName() + '-space', {
          type: 'string',
          alias: 'space',
          desc: productName() + ' Space to work against',
          requiresArg: true,
        })
        .option(productName() + '-project', {
          type: 'string',
          alias: 'proj',
          desc: productName() + ' Project to work against',
          requiresArg: true,
        })
        .option(productName() + '-repository', {
          type: 'string',
          alias: 'repo',
          desc: productName() + ' source repository to work against',
          requiresArg: true,
        })
        .option('action', {
          type: 'string',
          alias: 'action',
          desc: 'name of the action to be initialized',
          requiresArg: true,
        })
        .option('language', {
          type: 'string',
          alias: 'lang',
          desc: 'language to write the action in (only typescript is supported currently)',
          requiresArg: true,
        })
        .option('disconnected', {
          type: 'boolean',
          default: false,
          desc: 'If true, only generates ADK project files locally, without syncing with ' + productName(),
        });
    })
    .version(adk_version())
    .recommendCommands()
    .help()
    .alias('h', 'help').argv;
}

async function initAppContext(): Promise<INestApplicationContext> {
  const context = await bootstrap();
  context.useLogger(context.get(ConsoleLogger));
  return context;
}

async function parseCLIArgs() {
  const argv = await cliArgs();
  const cmd = argv._[0];
  let sanitizedFileName = escape(unknownToStringOrUndefined(argv.file));

  switch (cmd) {
    case 'validate':
      const validateAppContext = await initAppContext();
      Logger.log('Starting action validation');
      return validateAppContext.get(ValidationController).validateAction({
        file: sanitizedFileName,
        schemaType: SchemaType.CodeCatalyst,
      });
    case 'bootstrap':
      const bootstrapAppContext = await initAppContext();
      Logger.log(`Starting action bootstrap based on definition file ${sanitizedFileName}`);
      return bootstrapAppContext.get(BootstrapController).bootstrapAction({
        file: sanitizedFileName,
        schemaType: SchemaType.CodeCatalyst,
        templateBasePath: `${__dirname}/..`,
        language: 'typescript',
        overrideFiles: argv.override as unknown as boolean,
      });
    case 'init':
      const productInfo: ProductInfo = {
        space: escape(unknownToStringOrUndefined(argv.space)),
        project: escape(unknownToStringOrUndefined(argv.proj)),
        repository: escape(unknownToStringOrUndefined(argv.repo)),
      };
      console.log(chalk.green('Initializing ADK project...'));
      return init(
        productInfo,
        escape(unknownToStringOrUndefined(argv.action)),
        escape(unknownToStringOrUndefined(argv.language)),
        unknownToBooleanOrFalse(argv.disconnected),
      );
    default:
      console.log('Invalid command');
      return;
  }
}
/**
 * ADK CLI entry point.
 * Parses commands and arguments supports the following commands: init, bootstrap, validate.
 */
export function adkCli() {
  parseCLIArgs()
    .then(async value => {
      if (typeof value === 'number') {
        const resp = `Command exit code ${value}`;
        if (value == 0) {
          console.log(chalk.green(resp));
        } else {
          console.log(chalk.red(resp));
        }
        process.exitCode = value;
      }
    })
    .catch(err => {
      console.log(`Error ${err}`);
      process.exitCode = 1;
    });
}
