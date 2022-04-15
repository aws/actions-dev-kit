import chalk from 'chalk';

const fs = require('fs');

export async function handleCommand(): Promise<number> {
  let validationStatus: number = 0;
  for (const validation of validations) {
    if (!await validation()) {
      console.log(chalk.red("Validation Failed"));
      validationStatus = 1;
    }
  }
  return validationStatus;
}

const validations: Array<() => boolean | Promise<boolean>> = [
  validateReadMeFile,
  validateActionDefinition
];

const fileName = "README.md";

function validateReadMeFile() {
  if (!fs.existsSync(fileName)) {
    console.log(chalk.red(`${fileName} does not exist in the current directory`));
    return false;
  }
  return true;
}

function validateActionDefinition() {
  return true;
}
