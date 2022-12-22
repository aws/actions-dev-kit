import fs from 'fs';
import yaml from 'js-yaml';
import { Model } from '../types/types';
import { sanitizeModel } from '../sanitizer/sanitizer';

export function sanitizeAndParseModelFile(fileName: any): Model {
    let modelFile = fs.readFileSync(fileName, 'utf8');
    return parseModelFileContents(modelFile);
}

function parseModelFileContents(fileContents: any): Model {
    const definition = yaml.load(fileContents) as Model;
    const sanitizedDefinition = sanitizeModel(definition);
    console.log('Final Definition: ' + Object.values(sanitizedDefinition));
    return definition;
}
