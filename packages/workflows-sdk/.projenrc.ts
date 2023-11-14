import * as fs from 'fs';
import { typescript } from 'projen';

const packageJSON = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  packageName: '@amzn/codecatalyst-workflows-sdk',
  description:
    'This is the codecatalysts workflow sdk. This defines the workflow configuration a for codecatalyst project.',
  name: 'codecatalyst-workflows-sdk',
  projenrcTs: true,
  sampleCode: false,
  eslint: true,
  github: false,
  jest: true,
  jestOptions: {
    jestConfig: {
      verbose: true,
    },
  },
  npmignoreEnabled: true,
  tsconfigDev: {
    include: ['generators/**/*.ts'],
    compilerOptions: {
      esModuleInterop: true,
      noImplicitAny: false,
    },
  },
  gitignore: ['!/old-model-baseline.tgz'],
  tsconfig: {
    include: ['models'],
    compilerOptions: {
      esModuleInterop: true,
      noImplicitAny: false,
    },
  },
  license: 'Apache-2.0',
  copyrightOwner: 'Amazon.com',
  deps: [...Object.keys(packageJSON.dependencies || {})],
  peerDeps: ['projen', ...Object.keys(packageJSON.peerDependencies || {})],
  devDeps: [
    'projen',
    'ts-node',
    ...Object.keys(packageJSON.devDependencies || {}),
  ],
});

// keep consistent versions
const version = packageJSON.version;
project.package.addVersion(version || '0.0.0');

// precommit prettier
project.package.addField('husky', {
  hooks: {
    'pre-commit': 'pretty-quick --staged',
  },
});

// force node types
project.addDevDeps('@types/node@^18');

// modify bumping tasks
project.package.addField('preferGlobal', true);
project.removeTask('release');
project.removeTask('bump');
project.addTask('bump', {
  exec: 'npm version patch -no-git-tag-version --no-workspaces-update',
});

project.addTask('bump:preview', {
  exec: 'npm version prerelease --preid preview -no-git-tag-version --no-workspaces-update',
});

// force the static assets to always be fully included, regardless of .npmignores
project.package.addField('files', ['models', 'lib']);

// set custom scripts
project.setScript('projen', 'npx projen --no-post');
project.setScript(
  'generate',
  'npx ts-node ./generators/ts-codegen-driver.ts',
);
project.setScript(
  'component:package',
  ['yarn build', 'yarn package'].join(' && '),
);

project.setScript('build', ['yarn projen', 'yarn generate', 'npx projen build'].join(' && '));

project.setScript(
  'npm:push',
  ['yarn bump', 'yarn component:package', 'yarn npm:publish'].join(' && '),
);
project.setScript('npm:publish', 'npm publish dist/js/*.tgz');

project.synth();
