// @ts-ignore
import * as core from '@aws/codecatalyst-adk-core';
// @ts-ignore
import * as project from '@aws/codecatalyst-project';
// @ts-ignore
import * as runSummaries from '@aws/codecatalyst-run-summaries';
// @ts-ignore
import * as space from '@aws/codecatalyst-space';

try {
  // Get inputs from the action
  %%action_input_config%%

  // Interact with CodeCatalyst entities
  console.log(`Current CodeCatalyst space ${space.getSpace().name}`);
  console.log(`Current CodeCatalyst project ${project.getProject().name}`);

  // Action Code start

  // Set outputs of the action
  %%action_output_config%%

} catch(error) {
  core.setFailed(`Action Failed, reason: ${error}`);
}
