# `RunSummary`

## Overview
Add the run-summaries construct as a Quokka entity. This new construct will allow users to set custom summary messages during the execution of their actions that will be surfaced on the workflows UI.

## Usage

```
        import { RunSummaryLevel, RunSummaries } from '@quokka/run-summaries';

        try {
            // execute action code here
        } catch (error) {
            // Since we want to surface an error, we use RunSummaryLevel.ERROR to specify this is an error
            RunSummaries.addRunSummary(error, RunSummaryLevel.ERROR)
        }
```

```
        import { RunSummaryLevel, RunSummaries } from '@quokka/run-summaries';
        import * as adkCore from '@quokka/adk-core';
        
        const cmdOutput = adkCore.command(/* command here */)
        // if the exit code of the command is a failure
        if (cmdOutput.code != 0)
            // pass the error message of the command as the summary message text
            RunSummaries.addRunSummary(cmdOutput.stderr.toString(), RunSummaryLevel.ERROR)
        }
```
