import fs from 'fs';
import yaml from 'js-yaml';
import { Model } from '../types/types';
import { sanitizeFile } from '../sanitizer/sanitizer';

export function sanitizeAndParseModelFile(fileName: any): Model {
    let modelFile = fs.readFileSync(fileName, 'utf8');
    let sanitizedModelFile = sanitizeFile(modelFile);
    return parseModelFileContents(sanitizedModelFile);
}

function parseModelFileContents(fileContents: any): Model {
    const definition = yaml.load(fileContents) as Model;
    console.log('Final Definition: ' + Object.values(definition));
    return definition;
}
