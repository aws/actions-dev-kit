const core = require('@codecatalyst/adk-core');
const codecatalystOrg = require('@codecatalyst/organization');
const codecatalystProject = require('@codecatalyst/project');

try {
  // Get inputs from the action
  %%action_input_config%%

  // Interact with CodeCatalyst entities
  console.log(`Current CodeCatalyst org ${codecatalystOrg.getOrganization().name}`);

  // Action Code start

  // Set outputs of the action
  %%action_output_config%%

} catch(error) {
  core.setFailed(`Action Failed, reason: ${error}`);
}
