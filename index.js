const core = require('@actions/core');

try {
  // `terms` input defined in action metadata file
  const terms = core.getInput('terms');
  console.log(`Got terms: ${terms}`);
  console.log(`Terms type: ${typeof terms}`);
  if (!terms) {
    core.warning('input for action was not set');
  }
  let success_msg = "All terms check.";
  let result = terms.endsWith(success_msg);
  if (!result) {
    core.setFailed("There are in some file. Did you run `fmc` before pushing?");
  } else {
    core.setOutput("checked", success_msg);
  }

  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}