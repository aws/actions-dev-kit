import chalk from 'chalk';
import fs from 'fs';

export function parseModelFile(fileName: any): string {
  console.log(chalk.green('Starting parsing file ' + fileName));
  return parseModelFileContents(fs.readFileSync(fileName, 'utf8'));
}

function parseModelFileContents(fileContents: any): string {
  console.log(chalk.green('Starting parsing file ' + fileContents));
  return fileContents;
}
