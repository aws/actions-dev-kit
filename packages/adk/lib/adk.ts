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
      console.log("Validation Effort Began");
      return;
    default:
      console.log("Invalid command");
      return;
  }
}

export function adkCli() {
    parseCLIArgs()
      .then(async (value) => {
        if (typeof value === 'number') {
          process.exitCode = value;
        }
      })
      .catch(err => {
        console.log("Error ${err}");
        process.exitCode = 1;
      });
}
