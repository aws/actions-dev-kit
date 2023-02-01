const core = require('@codecatalyst/adk-core');
const codecatalystProject = require('@codecatalyst/project');
const codecatalystRunSummaries = require('@codecatalyst/run-summaries');
const codecatalystSpace = require('@codecatalyst/space');

try {
  // Get inputs from the action
  %%action_input_config%%

  // Interact with CodeCatalyst entities
  console.log(`Current CodeCatalyst space ${codecatalystSpace.getSpace().name}`);

  // Action Code start

  // Set outputs of the action
  %%action_output_config%%

} catch(error) {
  core.setFailed(`Action Failed, reason: ${error}`);
}
