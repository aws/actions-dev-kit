# ActionsDevKit (ADK)

## Purpose

An action is a task or function that can be added into a CodeCatalyst workﬂow such as scanning code for vulnerabilities, sending instant messages with webhook, or sending SMS messages using an engagement platform integration. But we often focus on plugging actions into a workflow, but developing and maintaining an action in itself is not a trivial task either. Lack of fundamental libraries and framework for creating actions along with lack of standards across industry forces action authors to create, author and maintain workflow actions in various different ways. This lack of standards and tooling causes action developers to either go identify the best quality actions to learn from or follow sub-optimal quality for the action.
The CodeCatalyst Action Development Kit (ADK) provides action authors appropriate tooling and development support using libraries and frameworks. With ADK, actions authors can build, test, and publish actions to CodeCatalyst actions catalog, where other users can add them to workflows. The ADK library enables you to write actions using libraries interfaces that make action development more efficient and ensures quality standards.


## ADK Components

There are two components of the ADK:

ADK command-line interface (CLI) - ADK CLI offers a set of commands that enables creating, validating, and testing actions.

ADK software development kit (SDK) - as an action author, you can use the ADK SDK to interact with action metadata and CodeCatalyst resources, including actions, workflows, secrets, logs, input variables, output variables, artifacts, and reports, through interfaces.



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

### ADK CLI

#### Sample Usage

```
>> adk init --lang typescript --space <CODECATALYST-SPACE-NAME> --proj <CODECATALYST-PROJECT-NAME> --repo <CODECATALYST-REPO-NAME> --action <ACTION-NAME>
...

>> adk bootstrap -f action.yml
...

>> adk validate
validating...
Missing README file...
action.yml parsing failed...
```

#### ADK CLI commands
* 1. initialize - Initializes the ADK project locally and produces required configuration files with specific language support.
* 2. bootstrap - Bootstrap CodeCatalyst action code by reading action definition. ADK SDK would be used to develop actions.
* 3. validate - Validates the action definition and README file.
* 4. generate-test-workflow - Generates workflow file to test the action without publishing the action. Forms basis for CI workflow for the action.
* 5. generate-readme - Generates README file for the action developer. Forms basis of what README files look like for CodeCatalyst actions.
* 6. version - Increments the current version of the action automatically. Follows semver semantics. Also helps bootstrapping the action version (e.g. starting from no version to first version to subsequent versions). Supports major or minor version increments.
* 7. help - Shows the current set of commands.

## Getting Started Guides

### Installation Guide

- [Install Guide](guides/install.md)

### ADK CLI Guide
- [ADK CLI Guide](guides/adk-cli.md)

### ADK SDK Guide
- [ADK CLI Guide](guides/adk-lib.md)

### Prerequisites

* Lerna

```
npm install --global lerna
```

* yarn

```
npm install --global yarn
```

### Install

* TODO - Add npmrc commands and how-to generate tokens

```
npm install --global adk
```

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

• Create a branch from main and name it feature-* branch (e.g. feature-add-init-command). Creating
the feature branch creates CI validation workﬂow against the feature-* branch.
• Update the code in your new branch feature-.
• Once you're done with feature development, create a pull request from source feature- branch
to destination main branch. This triggers a CI workﬂow in your feature-* branch. Update the pull
request with the workﬂow run in the description section of the pull request.
• Add at least two reviewers from the reviewer section. Reviewers can be anyone within the
organization, but at least one must be a developer from the AEF team.
• Once you have all the approvals in your pull request, merge the pull request from the UI by choosing
squash (not fast-forward merge) and reducing the number of commits to just one from the feature branch. This makes rollbacks easy if you have one commit per feature branch. If you have large amount
of changes in your pull request, it's best to rethink your development strategy to iteratively develop
and push code.
• On merge, release workﬂows within the ADK repository will kick-oﬀ. This should automatically bump
the version of the ADK package for consumption.

### Coverage Expectations

#### Goal
- branches: 90
- statements: 90
- functions: 90
- lines: 90

Actual coverages should be covered in the reports section
- [COVERAGES](.)

## Sample Actions Using ADK

- [S3 Publish Action](.)

## Contact

Please contact [AEF Team](mailto: caws-aef-team@amazon.com)

## ChangeLog

[Changelog](CHANGELOG.md)

## Security
See CONTRIBUTING for more information.

## License
This project is licensed under the Apache-2.0 License.
