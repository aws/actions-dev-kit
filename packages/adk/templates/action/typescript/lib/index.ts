const core = require('@quokka/adk-core');
const quokkaOrg = require('@quokka/organization');
const quokkaProject = require('@quokka/project');

try {
  // Get inputs from the action
  %%action_input_config%%

  // Interact with quokka entities
  console.log(`Current quokka org ${quokkaOrg.getOrganization().name}`);

  // Action Code start

  // Set outputs of the action
  %%action_output_config%%

} catch(error) {
  core.setFailed(`Action Failed, reason: ${error}`);
}
