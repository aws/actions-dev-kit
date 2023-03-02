# Action Development Kit (ADK)

## Purpose

Amazon CodeCatalyst provides software development teams one place to plan work, collaborate on code, and build, test, and deploy applications with continuous integration/continuous delivery (CI/CD) tools. For more information, see [What is Amazon CodeCatalyst?](https://docs.aws.amazon.com/codecatalyst/latest/userguide/welcome.html)

With the CodeCatalyst Action Development Kit (ADK), you can build, test, and publish actions to the CodeCatalyst actions catalog, where other users can add them to workflows. This ADK provides tooling and support to help you develop actions using libraries and frameworks.

In CodeCatalyst, an action is the main building block of a workflow. The actions you author define a logical unit of work to perform during a workflow run. By creating actions and workflows, you can automate procedures that describe how to build, test, and deploy your code as part of a continuous integration and continuous delivery (CI/CD) system. For more information, see [Working with actions](http://nadpat-clouddesk.aka.corp.amazon.com/docs-dev-kit/build/CAWSDocsDevKit/CAWSDocsDevKit-3.0/AL2_x86_64/DEV.STD.PTHREAD/build/server-root/adk/latest/guide/untitled%20folder%202/https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-actions.html).


## ADK Components

There are two components of the ADK:

1. ADK software development kit (SDK)

A set of library interfaces you can use to interact with action matadata and CodeCatalyst resources, including actions, workflows, secrets, logs, input variables, output variables, artifacts, and reports.

    
#### Sample Usage

```
// @ts-ignore
import * as core from '@codecatalyst/adk-core';
// @ts-ignore
import * as codecatalystProject from '@codecatalyst/project';
// @ts-ignore
import * as codecatalystRunSummaries from '@codecatalyst/run-summaries';
// @ts-ignore
import * as codecatalystSpace from '@codecatalyst/space';

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

2. ADK command line interface (CLI)

Tool to interact with a set of commands you can use to create, validate, and test actions.

#### Sample Usage

```
>> adk init --lang typescript --space <CODECATALYST-SPACE-NAME> --proj <CODECATALYST-PROJECT-NAME> --repo <CODECATALYST-REPO-NAME> --action <ACTION-NAME>
...

>> adk bootstrap -f .codecatalyst/actions/action.yml
...

>> adk validate
validating...
Missing README file...
action.yml parsing failed...
```

The following list contains the ADK CLI commands and information about how to use each command:
  * init – Initializes the ADK project locally and produces required configuration files with specific language support.
  * bootstrap – Bootstraps CodeCatalyst action code by reading the action definition file. The ADK SDK is used to develop actions.
  * validate – Validates the action definition and README file.
  * version – Returns the current version of ADK.
  * help – Shows the current set of commands.

  

## Installation Guide

### Prerequisites
1. Download the [latest version of npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). It is best to use a Node version manager like [nvm](https://github.com/nvm-sh/nvm) to install Node.js and npm.

2. Override the namespace registry:
    * Run the following npm command to edit the configuration: `npm config -g edit`.
    * Add the CodeCatalyst namespace override to the configuration: `@codecatalyst:registry=https://aef-team-198147706056.d.codeartifact.us-west-2.amazonaws.com/npm/ActionsDevKitPackage/`.
    * From the [AWS Console Access Dashboard](https://isengard.amazon.com/console-access?filter=198147706056), choose the icon to the right of **ReadOnlyAdkCodeArtifact**, choose **base/zsh**, choose **Copy bash/zsh**, and then paste and enter the temporary credentials into the working terminal session.
    * Run the following npm command to access the ReadOnlyAdkCodeArtifact: `aws codeartifact login —tool npm —repository ActionsDevKitPackage —domain aef-team —domain-owner 198147706056 —region us-west-2`.
3. Run the following Lerna command: `npm install -g lerna`.
    * [Lerna](https://lerna.js.org/) is a fast, modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository.
4. Run the following command to install yarn: ``npm install --global yarn``
    * [Yarn](https://yarnpkg.com/) is a package manager that doubles down as project manager. You can you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user.


### Install ADK CLI

1. Run the following npm command to get ADK packages:
   * `npm install -g @codecatalyst/adk`
   * `npm install -g @codecatalyst/adk-utils`
   

2. When running npm, you may face a bug with non-empty cache and switching registry. If you run into issues where a certain dependency isn't found, either remove your global npm cache or install the dependencies:
   * `npm install -g chalk@4`
   * `npm install -g @codecatalyst/adk-model-parser`
    

3. Validate that ADK is running with the following command: `adk help`


## Development

### Build
Run the following build command:
```
$ ./build.sh
```

### Testing
Run the following test command:

```
$ yarn run test-all
```

### Contribute

You can contribute to the ADK by completing development on a feature branch and creating a pull request:

* Create a branch from **main** and name it **feature-*** branch (e.g. **feature-add-init-command**). Creating the feature branch creates CI validation workflow against the feature- branch.
* Update the code in your new branch **feature-***.
* Once you're done with feature development, create a pull request from source **feature-*** branch to destination main branch. This triggers a CI workflow in your**feature-*** branch. Update the pull request with the workflow run in the description section of the pull request.
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
