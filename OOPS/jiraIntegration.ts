import axios from "axios"


const endPoint=""
const username=""
const apiKey=""
const key=""

export async function createIssue(summary:string,description:string){

    const issueBody={
        "fields":{
            "project":{
                "key":""
            },
            "summary":summary,
            "description":description,
            "issueType":{
                "name":"Bug"
            },
    "priority": {
      "name": "High"  // Set priority (e.g., Highest, High, Medium, Low, Lowest)
    },
    "assignee": {
      "accountId": "5f4e0c7c123456789abcdef0"  // Assignee's accountId
    }

    }
}
  const resp=await axios.post(endPoint,issueBody,{
    headers:{
        "Content-Type":"application/json",

    },
    auth:{
        username:username,
        password:apiKey

    }
  })
    console.log(resp.status)
    return resp.data.key

}