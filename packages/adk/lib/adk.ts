import { handleCommand as validate } from '../lib/commands/validate';
import { handleCommand as init } from '../lib/commands/init';
import { product_name } from '../lib/util/product';
import { version as adk_version } from '../lib/util/version';
import { ProductInfo } from '../lib/types/types';
import chalk from 'chalk';


import * as yargs from 'yargs';

async function cliArgs() {
  return yargs
    .usage('Usage: adk COMMAND')
    .command('validate', 'Validate the current workspace for Action definition')
    .command('init', 'Initializes the current workspace with default Action definition')
    .option(product_name() + '-org', { type: 'string', alias: 'org', desc: product_name() + ' Organization to work against', requiresArg: true })
    .option(product_name() + '-project', { type: 'string', alias: 'proj', desc: product_name() + ' Project to work against', requiresArg: true })
    .option(product_name() + '-repository', { type: 'string', alias: 'repo', desc: product_name() + ' source repository to work against', requiresArg: true })
    .option('action', { type: 'string', alias: 'action', desc: 'name of the action to be initialized', requiresArg: true })
    .option('language', { type: 'string', alias: 'lang', desc: 'language to write the action in (only typescript is supported currently)', requiresArg: true })
    .option('disconnected', { type: 'boolean', default: false, desc: 'If true, only generates ADK project files locally, without syncing with ' + product_name() })
    .version(adk_version())
    .recommendCommands()
    .help()
    .alias('h', 'help')
    .argv;
}

async function parseCLIArgs() {
  const argv = await cliArgs();
  const cmd = argv._[0];
  switch (cmd) {
    case 'validate':
      console.log(chalk.green('Starting validation'));
      return validate();
    case 'init':
      const productInfo : ProductInfo = {
        organization: argv.org,
        project: argv.proj,
        repository: argv.repo,
      };
      console.log(chalk.green('Intializing ADK project...'));
      return init(productInfo, argv.action, argv.language, argv.disconnected);
    default:
      console.log('Invalid command');
      return;
  }
}

export function adkCli() {
  parseCLIArgs()
    .then(async (value) => {
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
