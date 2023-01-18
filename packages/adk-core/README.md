# `@codecatalyst/adk-core`

"ADK Core" offers action developers library interfaces which make action development easier. Action authors can interact with core metadata information about the action, workflows, output variables, artifacts, reports etc, making it easier for the action author to fully model the input and output of the action code. 

## Usage

```
const adkCore = require('@codecatalyst/adk-core');

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
