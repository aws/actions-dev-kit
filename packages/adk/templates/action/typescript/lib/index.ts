// @ts-ignore
import * as core from '@codecatalyst/adk-core';
// @ts-ignore
import * as codecatalystProject from '@codecatalyst/project';
// @ts-ignore
import * as codecatalystRunSummaries from '@codecatalyst/run-summaries';
// @ts-ignore
import * as codecatalystSpace from '@codecatalyst/space';

try {
  // Get inputs from the action
  %%action_input_config%%

  // Interact with CodeCatalyst entities
  console.log(`Current CodeCatalyst space ${codecatalystSpace.getSpace().name}`);
  console.log(`Current CodeCatalyst project ${codecatalystProject.getProject().name}`);

  // Action Code start

  // Set outputs of the action
  %%action_output_config%%

} catch(error) {
  core.setFailed(`Action Failed, reason: ${error}`);
}
