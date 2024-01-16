import * as fs from 'fs';
import { typescript } from 'projen';

const existingPackage = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  packageName: existingPackage.name,
  description: existingPackage.description,
  name: existingPackage.name,
  projenrcTs: true,
  sampleCode: false,
  eslint: true,
  github: false,
  npmignoreEnabled: true,
  tsconfig: {
    compilerOptions: {
      esModuleInterop: true,
      noImplicitAny: false,
    },
  },
  jest: true,
  jestOptions: {
    jestConfig: {
      coverageThreshold: {
        statements: 47,
        branches: 40,
        functions: 50,
        lines: 53,
      },
    },
  },
  license: 'Apache-2.0',
  copyrightOwner: 'Amazon.com',
  deps: ['@aws/codecatalyst-adk-utils', 'shelljs'],
  devDeps: ['projen', 'ts-node@^10'],
});

project.addDevDeps('@types/node@^18');

// keep consistent versions
const version = existingPackage.version;
project.package.addVersion(version || '0.0.0');

// modify bumping tasks
project.removeTask('release');
project.removeTask('bump');
project.addTask('bump', {
  exec: 'npm version patch -no-git-tag-version --no-workspaces-update',
});

project.package.addField('preferGlobal', true);

// set custom scripts
project.setScript('projen', 'npx projen --no-post');

project.setScript('component:package', ['yarn build', 'yarn package'].join(' && '));

project.setScript('npm:push', ['yarn bump', 'yarn component:package', 'yarn npm:publish'].join(' && '));
project.setScript('npm:publish', 'npm publish dist/js/*.tgz');

project.synth();
