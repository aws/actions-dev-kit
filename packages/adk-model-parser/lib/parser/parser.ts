import chalk from 'chalk';
import fs from 'fs';
import yaml from 'js-yaml';
import { Model } from '../types/types';

export function parseModelFile(fileName: any): Model {
    console.log(chalk.green('Starting parsing file ' + fileName));
    return parseModelFileContents(fs.readFileSync(fileName, 'utf8'));
}

function parseModelFileContents(fileContents: any): Model {
    const definition = yaml.load(fileContents) as Model;
    console.log('Final Definition: ' + Object.values(definition));
    return definition;
}
