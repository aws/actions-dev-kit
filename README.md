# Action Development Kit (ADK)

## Purpose

An action is a task or function that can be added into a CodeCatalyst workﬂow such as scanning code for vulnerabilities, sending instant messages with webhook, or sending SMS messages using an engagement platform integration. But we often focus on plugging actions into a workflow, but developing and maintaining an action in itself is not a trivial task either. Lack of fundamental libraries and framework for creating actions along with lack of standards across industry forces action authors to create, author and maintain workflow actions in various different ways. This lack of standards and tooling causes action developers to either go identify the best quality actions to learn from or follow sub-optimal quality for the action.
The CodeCatalyst Action Development Kit (ADK) provides action authors appropriate tooling and development support using libraries and frameworks. With ADK, actions authors can build, test, and publish actions to CodeCatalyst actions catalog, where other users can add them to workflows. The ADK library enables you to write actions using libraries interfaces that make action development more efficient and ensures quality standards.


## ADK Components

There are two components of the ADK:

* ADK software development kit (SDK)
    * A set of library interfaces you can use to interact with action matadata and CodeCatalyst resouces, including actions, workflows, secrets, logs, input variables, output variables, artifacts, and reports.
    * Sample usage (S3 Publish Action):

    
#### Sample Usage

```
const core = require('@codecatalyst/adk-core')
const codecatalystSpace = require('@codecatalyst/space');
const codecatalystProject = require('@codecatalyst/project');

const destinationBucket = core.getInput('DestinationBucketName')
    # => Maps to the destination bucket configuration in Code.AWS workflow definition
const srcDir = core.getInput('SourcePath')
    # => Maps to the src dir configuration in CodeCatalyst workflow definition
console.log("Running action S3 Publish Action")
let cmd = `aws s3 sync ${srcDir} s3://${destinationBucket}/${codecatalystSpace.getSpace().name}/${codecatalystProject.getProject().name}/`
const cmdOutput = core.command(cmd)
console.log(cmdOutput.stdout)

if (cmdOutput.code != 0) {
  core.setFailed(cmdOutput.stderr)
} else {
  core.setOutputVariable("Files", cmdOutput.stdOut)
}
```

* ADK command line interface (CLI)
    * Tool to interact with a set of commands you can use to create, validate, and test actions.
    * Sample usage:

```
>> adk init --lang typescript --space <CODECATALYST-SPACE-NAME> --proj <CODECATALYST-PROJECT-NAME> --repo <CODECATALYST-REPO-NAME> --action <ACTION-NAME>
...

>> adk bootstrap -f ./codecatalyst/actions/action.yml
...

>> adk validate
validating...
Missing README file...
action.yml parsing failed...
```

* CLI commands
  * The following list contains the ADK CLI commands and information about how to use each command:
    * init – Initializes the ADK project locally and produces required configuration files with specific language support.
    * bootstrap – Bootstraps CodeCatalyst action code by reading the action definition file. The ADK SDK is used to develop actions.
    * validate – Validates the action definition and README file.
    * version – Increments the current version of the action automatically. Follows semver (https://semver.org/) semantics. Also helps bootstrapping the action version (for example, starting from no version to first version to subsequent versions). Supports major and minor version increments.
    * help – Shows the current set of commands.

  

## Installation Guide

### Prerequisites
* [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
    * Easiest way to install npm is via [nvm](https://github.com/nvm-sh/nvm)
* override the '@codecatalyst' namespace registry
    * Run `npm config --global edit`
    * Add codecatalyst namespace override to the configuration `@codecatalyst:registry=https://aef-team-198147706056.d.codeartifact.us-west-2.amazonaws.com/npm/ActionsDevKitPackage/`
    * Visit https://isengard.amazon.com/console-access?filter=198147706056 and copy and temporarily credentials for the ReadOnlyAdkCodeArtifact into working terminal session
      Run `aws codeartifact login --tool npm --repository ActionsDevKitPackage --domain aef-team --domain-owner 198147706056 --region us-west-2`

* install lerna - Lerna is a fast, modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository (https://lerna.js.org/)

```
npm install --global lerna
```

* install yarn - Yarn is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered. (https://yarnpkg.com/)

```
npm install --global yarn
```

### Install ADK

* Run `npm install -g @codecatalyst/adk`
    * Occasionally, npm runs into bug with non-empty cache and switching registry. If you run into issue where certain dependency is not found, either nuke your global npm cache or simply install the dependencies.
        * `npm install -g @codecatalyst/adk-model-parser`
        * `npm install -g @codecatalyst/adk-utils`
        * `npm install -g chalk@4`
        *  etc.

* Validate ADK is running by running the following command `adk help`


## Development

### Build

```
$ ./build.sh
```

### Testing

```
$ yarn run test-all
```

### Contribute

You can contribute to the ADK by completing development on a feature branch and creating a pull request:

* Create a branch from main and name it feature-* branch (e.g. feature-add-init-command). Creating the feature branch creates CI validation workflow against the feature- branch.
* Update the code in your new branch feature-*.
* Once you're done with feature development, create a pull request from source feature-* branch to destination main branch. This triggers a CI workflow in your feature-* branch. Update the pull request with the workflow run in the description section of the pull request.
* Add reviewers from the reviewer section. Reviewers can be anyone within the organization, but at least one must be a developer from the AEF team.
* Once you have all the approvals in your pull request, merge the pull request from the UI by choosing squash (not fast forward merge) and reducing the number of commits to just one from the feature branch. This makes rollbacks easy if you have one commit per feature branch. If you have large amount of changes in your pull request, it's best to rethink your development strategy to iteratively develop and push code.
* On merge, release workflows within the ADK repository will kick-off. This should automatically bump the version of the ADK package for consumption.


### Test Coverage Expectations

- branches: 90%
- statements: 90%
- functions: 90%
- lines: 90%

## Contact

Please contact [AEF Team](mailto: caws-aef-team@amazon.com)

## ChangeLog

[Changelog](./CHANGELOG.md)

## Security
See CONTRIBUTING for more information.

## License
This project is licensed under the Apache-2.0 License.
