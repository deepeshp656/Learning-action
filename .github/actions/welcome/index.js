const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
 // const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello Deepesh`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  let student = JSON.parse(payload);
  let label = JSON.parse(student.pull_request.Labels);
  console.log(student.action);
  console.log(label);
  console.log(`The event payload: ${payload[1]}`);
} catch (error) {
  core.setFailed(error.message);
}
