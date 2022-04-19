# ActionsDevKit

## Purpose

“Actions” in Code.AWS form basic building blocks for functions or tasks within Code.AWS workflows. E.g. Scan code for vulnerabilities, create JIRA issues for any high severity findings and inform the developers by sending a SMS message using Twilio integration. But we often focus on plugging actions into a workflow, but developing and maintaining an action in itself is not a trivial task either. Lack of fundamental libraries and framework for creating actions along with lack of standards across industry forces action authors to create, author and maintain workflow actions in various different ways. This lack of standards and tooling causes action developers to either go identify best quality actions to learn from or follow sub-optimal quality for the action.
ADK (actions.dev kit) provides action authors right tooling and development support via libraries and frameworks, where action developers can build fresh actions or iterate on their existing actions at much faster pace, along with maintaining the quality standards for the action. Actions authors can build, test and publish their actions to Code.AWS actions catalog at much higher velocity.


## Components

### ADK SDK (ADK Lib)

- [`ADK SDK`](./packages/adk-core#readme)

### ADK CLI

[`ADK CLI`](./packages/adk#readme)

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

### Testing

```
$ yarn run test-all
```

### Contributing

* Create branch from main and call it `feature-*` branch. E.g. `feature-add-init-command`.
* Creating feature branch creates CI validation workflow against the `feature-*` branch.
* Update code in your new branch `feature-*`
* Once you're done with feature development, create `Pull Request` from source `feature-*` branch to destination `main` branch
* This triggers a CI workflow in your feature-* branch. Please update the pull request with the workflow run in the description section of the PR.
* Add atleast 2 reviewers from the reviewer section. Reviewers can be anyone within the organization, but at least one developer from AEF team.
* Once your have all the approvals in your pull request, merge the pull request from UI by choosing `squash` (not fast forward merge) and reducing the number of commits to just one from feature-branch. 
This makes rollbacks easy if you have one commit per feature branch. If you have large amount of changes in your PR, I suggest re-think your development strategy to iteratively develop and push code.
* On merge, release workflows within ADK repository will kick-off which should automatically bump the version of the ADK package for consumption.

### Coverage Expectations

#### Goal
* branches: 90
* statements: 90
* functions: 90
* lines: 90

Actual coverages should be covered in the reports section
[COVERAGES](https://quokka.codes/organizations/AEF-Team/projects/ActionsDevKit/tests)

## Sample Actions Using ADK

## Contact

Please contact [AEF Team](mailto: caws-aef-team@amazon.com)

## ChangeLog

[Changelog](./CHANGELOG.md)

## License

[License](./LICENSE)

