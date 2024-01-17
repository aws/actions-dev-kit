import * as fs from 'fs';
import { TypescriptConstruct } from '@aws/adk-typescript-construct';

const existingPackage = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const project = new TypescriptConstruct({
  defaultReleaseBranch: 'main',
  packageName: existingPackage.name,
  description: existingPackage.description,
  name: existingPackage.name,
  version: existingPackage.version || '0.0.0',
  deps: [
    '@aws/codecatalyst-adk-model-parser',
    '@aws/codecatalyst-adk-utils',
    '@nestjs/common',
    '@nestjs/core',
    'chalk',
    'js-yaml',
    'jsonschema',
    'rxjs',
    'yargs',
  ],
  devDeps: ['projen', 'ts-node@^10', '@aws/adk-typescript-construct', 'reflect-metadata'],
});
project.synth();
