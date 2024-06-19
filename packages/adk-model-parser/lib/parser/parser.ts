import fs from 'fs';
import yaml from 'js-yaml';
import { Model } from '../types/types';
import { sanitizeModel } from '../sanitizer/sanitizer';

/**
 *
 * Parses action.yaml file into a model and sanitizes user input by HTML escaping special characters.
 *
 * @param fileName The file name to be parsed. This file must be in the YAML format.
 *
 * @returns {@link Model | `Action model`} The model populated from the file's content.
 */
export function parseAndSanitizeYamlFile(fileName: any): Model {
    let modelFile = fs.readFileSync(fileName, 'utf8');
    return parseModelFileContents(modelFile);
}

function parseModelFileContents(fileContents: any): Model {
    const definition = yaml.load(fileContents) as Model;
    return sanitizeModel(definition);
}
