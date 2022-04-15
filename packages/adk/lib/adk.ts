import { handleCommand as validate } from '../lib/commands/validate';
import chalk from 'chalk';

import yargs = require("yargs");
const version = "0.0.0";

async function cliArgs() {
  return yargs
    .usage('Usage: adk COMMAND')
    .command('validate', 'Validate the current workspace for Action definition')
    .version(version)
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
      console.log(chalk.green("Starting validation"));
      return validate();
    default:
      console.log("Invalid command");
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
        console.log("Error ${err}");
        process.exitCode = 1;
      });
}
