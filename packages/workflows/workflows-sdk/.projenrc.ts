import * as fs from 'fs';
import { TypescriptConstruct } from '@aws/adk-typescript-construct';

const existingPackage = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const project = new TypescriptConstruct({
  defaultReleaseBranch: 'main',
  packageName: existingPackage.name,
  description: existingPackage.description,
  name: existingPackage.name,
  version: existingPackage.version || '0.0.0',
  deps: ['globule', 'js-yaml', 'jsonschema'],
  devDeps: [
    'old-model-baseline@file:./old-model-baseline-sdk-0.1.5-preview.7.tgz',
    'json-schema-to-typescript',
    'projen',
    'ts-node@^10',
    '@aws/adk-typescript-construct',
  ],
  tsconfigDev: {
    include: ['generators/**/*.ts'],
    compilerOptions: {
      esModuleInterop: true,
      noImplicitAny: false,
    },
  },
  gitignore: ['!/old-model-baseline*.tgz'],
  tsconfig: {
    include: ['models'],
    compilerOptions: {
      esModuleInterop: true,
      noImplicitAny: false,
    },
  },
});

// force the static assets to always be fully included, regardless of .npmignores
project.package.addField('files', ['models', 'lib']);

// set custom scripts
project.setScript('generate', 'npx ts-node ./generators/ts-codegen-driver.ts');
project.setScript('build', ['yarn projen', 'yarn generate', 'npx projen build'].join(' && '));

project.synth();
