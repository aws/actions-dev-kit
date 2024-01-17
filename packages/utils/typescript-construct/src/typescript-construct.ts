import { typescript } from 'projen';

export interface TypescriptConstructOptions extends typescript.TypeScriptProjectOptions {
  version: string;
}

export class TypescriptConstruct extends typescript.TypeScriptProject {
  constructor(options: TypescriptConstructOptions) {
    super({
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
      ...options,
    });

    this.addDevDeps('@types/node@^18');

    // keep consistent versions
    this.package.addVersion(options.version);

    // modify bumping tasks
    this.removeTask('release');
    this.removeTask('bump');
    this.addTask('bump', {
      exec: 'npm version patch -no-git-tag-version --no-workspaces-update',
    });

    // modify bumping tasks
    this.package.addField('preferGlobal', true);

    this.addTask('bump:preview', {
      exec: 'npm version prerelease --preid preview -no-git-tag-version --no-workspaces-update',
    });

    this.package.addField('preferGlobal', true);

    // set custom scripts
    this.setScript('projen', 'npx projen --no-post');

    this.setScript('component:package', ['yarn build', 'yarn package'].join(' && '));

    this.setScript('npm:push', ['yarn bump', 'yarn component:package', 'yarn npm:publish'].join(' && '));
    this.setScript('npm:publish', 'npm publish dist/js/*.tgz');
  }
}
