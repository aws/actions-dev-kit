# ActionsDevKit

## Purpose

“Actions” in Code.AWS form basic building blocks for functions or tasks within Code.AWS workflows. E.g. Scan code for vulnerabilities, create JIRA issues for any high severity findings and inform the developers by sending a SMS message using Twilio integration. But we often focus on plugging actions into a workflow, but developing and maintaining an action in itself is not a trivial task either. Lack of fundamental libraries and framework for creating actions along with lack of standards across industry forces action authors to create, author and maintain workflow actions in various different ways. This lack of standards and tooling causes action developers to either go identify best quality actions to learn from or follow sub-optimal quality for the action.
ADK (actions.dev kit) provides action authors right tooling and development support via libraries and frameworks, where action developers can build fresh actions or iterate on their existing actions at much faster pace, along with maintaining the quality standards for the action. Actions authors can build, test and publish their actions to Code.AWS actions catalog at much higher velocity.


## Components

ADK largely comprises of 2 parts, ADK CLI and SDK. 
CLI provides the right interface to either start writing new actions, publish new actions/action versions or unpublish their existing published actions from Code.AWS catalog. 
SDK on the other hand, allows Action developers to write their actions with highest quality using libraries interfaces which make action development easier and conforming to quality standards. Action authors can use ADK SDK to interact with metadata information about the action, workflows, compute, secrets, logs, events, output variables, artifacts, reports etc, 
making it easier for the action author to fully model the input and output of the action code. 

### ADK SDK (ADK Lib)

Using ADK SDK, customers can interact with Code.AWS concepts and resources. Lets start writing S3 Publish Action using ADK SDK.

#### Sample Usage

```
const core = require('@quokka/adk-core')
const destinationBucket = core.getInput('DestinationBucketName') 
    # => Maps to the destination bucket configuration in Code.AWS workflow definition
const srcDir = core.getInput('SourcePath')
    # => Maps to the src dir configuration in Code.AWS workflow definition
const cawsOrg = core.getCawsOrg()
    # => Metadata information about CAWS org
const cawsProject = core.getProject()
    # => Metadata information about CAWS project
const actionName = core.getActionName()
console.log("Running action ${actionName}")
let cmd = `aws s3 sync ${srcDir} s3://${destinationBucket}/${cawsOrg}/${cawsProject}/`
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
>> adk init --action-name MyAction --caws-org ORG --caws-project PROJ
...

>> adk bootstrap -f action.yml
...

>> adk validate
validating...
Missing README file...
action.yml parsing failed...

>> adk publish --action-name MyAction --version 1.0.0
validating...
Action schema published:
  Name: <Org>/MyAction
  Version: 1.0.0
  Inputs:
    DestinationBucketName:
        Description: 'Name of the S3 bucket to publish artifacts to'
        Required: true
        DisplayName: 'Destination Bucket Name'
        Type: string
    SourcePath:
        Description: 'Path of the files to publish in the local filesystem. This could directly be a path or a reference to a file in an input artifact'
        Required: false
        DisplayName: 'Source Path'
        Type: string
        Default: '.'
   Outputs:
     ....
     
This operation will publish Action <Org>/MyAction:1.0.0 to "Public catalog". Are you sure?
```

#### Commands
* 1. initialize - Initializes the ADK project locally, also produces required configuration files with specific language support.
* 2. bootstrap - Bootstrap Code.AWS Action code by reading action definition. ADK SDK would be used to develop actions.
* 3. validate - Validates the action definition and README file. In future, expand this command to validate the action is ready to be published.
* 4. generate-test-workflow - Generate workflow file to test the action without publishing the action. Forms basis for CI workflow for the action.
* 5. generate-readme - Generate good quality README file for the action developer. This forms basis of what we want from README files to look like for Code.AWS actions.
* 6. sync - Sync’s the current workspace code with existing published Action.
* 7. diff - Shows the diff of current workspace code with an existing published action or previous version of an existing published Action. Shows input/output differences as well as runtime/dependency differences.
* 8. publish - Publish the action from local workspace to Code.AWS. Does validate that the action version can be published.
* 9. deprecate/unpublish - Once we have deprecate capabilitiy, tries to unpublish an action version or marks an action version ready to publish.
* 10. version - Increments the current version of the action automatically. Follows semver (https://semver.org/) semantics. Also helps bootstrapping the action version, e.g. starting from no version to first version to subsequent versions. Supports major, minor version increments.
* 11. help - shows the current set of commands


## Getting Started

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

### Contributing

- Create branch from main and call it `feature-*` branch. E.g. `feature-add-init-command`.
- Creating feature branch creates CI validation workflow against the `feature-*` branch.
- Update code in your new branch `feature-*`
- Once you're done with feature development, create `Pull Request` from source `feature-*` branch to destination `main` branch
- This triggers a CI workflow in your feature-* branch. Please update the pull request with the workflow run in the description section of the PR.
- Add atleast 2 reviewers from the reviewer section. Reviewers can be anyone within the organization, but at least one developer from AEF team.
- Once your have all the approvals in your pull request, merge the pull request from UI by choosing `squash` (not fast forward merge) and reducing the number of commits to just one from feature-branch. 
This makes rollbacks easy if you have one commit per feature branch. If you have large amount of changes in your PR, I suggest re-think your development strategy to iteratively develop and push code.
- On merge, release workflows within ADK repository will kick-off which should automatically bump the version of the ADK package for consumption.

### Coverage Expectations

#### Goal
- branches: 90
- statements: 90
- functions: 90
- lines: 90

Actual coverages should be covered in the reports section
- [COVERAGES](https://quokka.codes/organizations/AEF-Team/projects/ActionsDevKit/tests)

## Sample Actions Using ADK

- [S3 Publish Action](https://quokka.codes/organizations/AEF-Team/projects/S3-Publish-Action/view)

## Contact

Please contact [AEF Team](mailto: caws-aef-team@amazon.com)

## ChangeLog

- [Changelog](./CHANGELOG.md)

## License

- [License](./LICENSE)

