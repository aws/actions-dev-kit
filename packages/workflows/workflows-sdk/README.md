# CodeCatalyst Workflows SDK

## Description

A JavaScript SDK for CodeCatalyst Workflows.

This SDK is meant to aid users in creating [Amazon CodeCatalyst Workflows](https://docs.aws.amazon.com/codecatalyst/latest/userguide/flows.html) by
providing a client to syntactically validate a workflow yaml prior to committing the file.

## Installing

To install this package, simply type add or install @aws/codecatalyst-workflows-sdk using your favorite package manager:

```shell
npm install @aws/codecatalyst-workflows-sdk
```

```shell
yarn add @aws/codecatalyst-workflows-sdk
```

```shell
pnpm add @aws/codecatalyst-workflows-sdk
```

## Getting Started

### Import

To start using the sdk to validate your workflow yaml files import the WorkflowDefinition Module from the client

```javascript
// es5 example
const { WorkflowDefinition } = require('@aws/codecatalyst-workflows-sdk');
```

```javascript
//es6 example
const { WorkflowDefinition } = require('@aws/codecatalyst-workflows-sdk');
```

### Usage

To validate your workflow yaml file use the `validate` command on the `WorkflowDefinition` class. An example can be found below

```javascript
const { WorkflowDefinition } = require('@aws/codecatalyst-workflows-sdk');
const { load } = require('js-yaml');

const workflowYaml = `
Name: PushWorkflow
SchemaVersion: 1.0
Triggers:
  - Type: PULLREQUEST
    Events:
      - "DRAFT"
Actions:
  BackendBuildAndPackage:
    Identifier: aws/build@v1
    Inputs:
      Sources:
        - WorkflowSource
    Outputs:
      Artifacts:
        - Name: backend
          Files:
            - "**/*"
    Configuration:
      Steps:
        - Run: echo "Building Backend Artifacts..."
`;

const validationResult = WorkflowDefinition.validate(load(workflowYaml));
```

## Actions that are supported

- aws/build@v1
- aws/managed-test@v1
- aws/github-actions-runner@v1

## License

This SDK is distributed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0), see LICENSE for more information.
