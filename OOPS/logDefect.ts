import { TestInfo } from "playwright/test";
import { createIssue } from "./jiraIntegration";

async function defectlogtoJira(testInfo:TestInfo){

  if(testInfo.status=="timedOut"||testInfo.status=="failed"){
const summary= `${testInfo.title} is failed`
const description=`The test failed due to ${testInfo.error}`
createIssue(summary,description)
  }

}