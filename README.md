# Action Development Kit (ADK)

## Purpose

Amazon CodeCatalyst provides software development teams one place to plan work, collaborate on code, and build, test, and deploy applications with
continuous integration/continuous delivery (CI/CD) tools. For more information, see
[What is Amazon CodeCatalyst?](https://docs.aws.amazon.com/codecatalyst/latest/userguide/welcome.html)

With the CodeCatalyst Action Development Kit (ADK), you can build, test, and publish actions to the CodeCatalyst actions catalog, where other users
can add them to workflows. This ADK provides tooling and support to help you develop actions using libraries and frameworks.

In CodeCatalyst, an action is the main building block of a workflow. The actions you author define a logical unit of work to perform during a workflow
run. By creating actions and workflows, you can automate procedures that describe how to build, test, and deploy your code as part of a continuous
integration and continuous delivery (CI/CD) system. For more information, see
[Working with actions](https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-actions.html).

## ADK Components

There are two components of the ADK:

1. ADK software development kit (SDK)

A set of library interfaces you can use to interact with action matadata and CodeCatalyst resources, including actions, workflows, secrets, logs,
input variables, output variables, artifacts, and reports.

#### Sample Usage

```
// @ts-ignore
import * as core from '@aws/codecatalyst-adk-core';
// @ts-ignore
import * as project from '@aws/codecatalyst-project';
// @ts-ignore
import { RunSummaryLevel, RunSummaries } from '@aws/codecatalyst-run-summaries';
// @ts-ignore
import * as space from '@aws/codecatalyst-space';

const destinationBucket = core.getInput('DestinationBucketName')
    # => Maps to the destination bucket configuration in CodeCatalyst workflow definition
const srcDir = core.getInput('SourcePath')
    # => Maps to the src dir configuration in CodeCatalyst workflow definition
console.log("Running action S3 Publish Action")
let cmd = `aws s3 sync ${srcDir} s3://${destinationBucket}/${space.getSpace().name}/${project.getProject().name}/`
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

>> adk bootstrap
...

>> adk validate
validating...
Missing README file...
action.yml parsing failed...
```

The following list contains the ADK CLI commands and information about how to use each command:

- init – Initializes the ADK project locally and produces required configuration files with specific language support.
- bootstrap – Bootstraps CodeCatalyst action code by reading the action definition file. The ADK SDK is used to develop actions.
- validate – Validates the action definition and README file.
- version – Returns the current version of ADK.
- help – Shows the current set of commands.

## Installation Guide

### Prerequisites

Download the [latest version of npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). It is best to use a Node version manager like
[nvm](https://github.com/nvm-sh/nvm) to install Node.js and npm.

```
yarn
yarn build
```

### Install ADK CLI

1. Run the following npm command to install the ADK CLI package globally:

   - `npm install -g @aws/codecatalyst-adk`

2. Validate that ADK is running with the following command: `adk help`

## Development

### Build

Run the following build command:

```
yarn build
```

### Testing

Run the following test command:

```
yarn test
```

### Contribute

You can contribute to the ADK by completing development on a feature branch and creating a pull request:

- Create a branch from **main** and name it **feature-\*** branch (e.g. **feature-add-init-command**). Creating the feature branch creates CI
  validation workflow against the feature- branch.
- Update the code in your new branch **feature-\***.
- Once you're done with feature development, create a pull request from source **feature-\*** branch to destination main branch. This triggers a CI
  workflow in your**feature-\*** branch. Update the pull request with the workflow run in the description section of the pull request.
- Add reviewers from the reviewer section. Reviewers can be anyone within the organization, but at least one must be a developer from the AEF team.
- Once you have all the approvals in your pull request, merge the pull request from the UI by choosing squash (not fast forward merge) and reducing
  the number of commits to just one from the feature branch. This makes rollbacks easy if you have one commit per feature branch. If you have large
  amount of changes in your pull request, it's best to rethink your development strategy to iteratively develop and push code.
- On merge, release workflows within the ADK repository will kick-off. This should automatically bump the version of the ADK package for consumption.

### Test Coverage Expectations

- branches: 90%
- statements: 90%
- functions: 90%
- lines: 90%

## ChangeLog

[Changelog](./CHANGELOG.md)

## Security

See CONTRIBUTING for more information.

## License

This project is licensed under the Apache-2.0 License.
