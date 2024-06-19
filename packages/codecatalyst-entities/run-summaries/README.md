# `@aws/codecatalyst-run-summaries`

## Purpose
Use the run-summaries construct to set custom summary messages during the execution of actions that will be surfaced on the CodeCatalyst workflows UI.

## Usage

```
   import { RunSummaryLevel, RunSummaries } from '@aws/codecatalyst-run-summaries';

   try {
        // execute action code here
   } catch (error) {
        // Since we want to surface an error, we use RunSummaryLevel.ERROR to specify this is an error
        RunSummaries.addRunSummary(error, RunSummaryLevel.ERROR)
   }
```

```
   import { RunSummaryLevel, RunSummaries } from '@aws/codecatalyst-run-summaries';
   import * as adkCore from '@aws/codecatalyst-adk-core';
        
   const cmdOutput = adkCore.command(/* command here */)
   // if the exit code of the command is a failure
   if (cmdOutput.code != 0)
        // pass the error message of the command as the summary message text
        RunSummaries.addRunSummary(cmdOutput.stderr.toString(), RunSummaryLevel.ERROR)
   }
```
