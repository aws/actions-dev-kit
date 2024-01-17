# `@aws/codecatalyst-adk-core`

## Purpose

ADK Core offers action developers library interfaces that makes action development easier. Action authors can interact with core metadata information
about the action, workflows, output variables, artifacts, reports, etc, giving the action author ability to fully model the input and output of the
action code.

## Usage

```
const adkCore = require('@aws/codecatalyst-adk-core');
const space = require('@aws/codecatalyst-space');
    # => Metadata information about CodeCatalyst space
const project = require('@aws/codecatalyst-project');
    # => Metadata information about CodeCatalyst project

const destinationBucket = core.getInput('DestinationBucketName')
    # => Maps to the destination bucket configuration in CodeCatalyst workflow definition
const srcDir = core.getInput('SourcePath')
    # => Maps to the src dir configuration in CodeCatalyst workflow definition

const actionName = core.getActionName()
console.log("Running action ${actionName}")
let cmd = `aws s3 sync ${srcDir} s3://${destinationBucket}/${space.getSpace().name}/${project.getProject().name}/`
const cmdOutput = core.command(cmd)
console.log(cmdOutput.stdout)

if (cmdOutput.code != 0) {
  core.setFailed(cmdOutput.stderr)
} else {
  core.setOutputVariable("Files", cmdOutput.stdOut)
}

```
