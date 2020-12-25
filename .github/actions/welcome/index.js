const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
 // const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello Deepesh`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const pullRequest = github.context.payload.pull_request;
  const Name=pullRequest.labels["name"];
  for(var exKey in PullRequest) {
    console.log("key:"+exKey+", value:"+pullRequest[exKey]);
}
  //const payload = JSON.stringify(github.context.payload, undefined, 2)
  //let student = JSON.parse(github.context.payload.pull_request);
  //console.log(student);
  //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
