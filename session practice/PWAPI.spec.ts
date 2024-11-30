import test from '@playwright/test'

let accessToken:any
let baseUrl:any
let leadId:any
test.describe.serial(`Salesforce CRUD opn`,()=>{
test(`Generate Token `,async({request})=>{

      const tokenResponse= await request.post("https://login.salesforce.com/services/oauth2/token",{
        headers:{
            "Content_Type":"application/x-www-form-urlencoded",   
           "Connection": "keep-alive"
        },
        form:{
            "grant_type":"password",
            "client_id":"3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
            "client_secret":"149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
            "username":"vidyar@testleaf.com",
            "password":"Sales@123"
        }
      })


     const response=await tokenResponse.json()
     console.log(response)
     accessToken = response.access_token;
     baseUrl = response.instance_url;
     console.log(`The generated access token -  ${accessToken}`)
     console.log(`The generated instance Url -  ${baseUrl}`)
})

test(`Create Lead in sf`,async({request})=>{
     const resp=await request.post(`${baseUrl}/services/data/v62.0/sobjects/Lead`,{
        headers:{
            "Content_Type":"application/json",
            "Authorization":`Bearer ${accessToken}`
                },
        data:{
            "lastname":"v",
            "company":"Wipro"
        }
     })

     const leadResp=await resp.json()
     console.log(leadResp)
     leadId=leadResp.id
     console.log(leadId)
})

test(`Get specific Lead in sf`,async({request})=>{
    const resp=await request.get(`${baseUrl}/services/data/v62.0/sobjects/Lead/${leadId}`,{
       headers:{
           "Content_Type":"application/json",
           "Authorization":`Bearer ${accessToken}`
               },
    })

    const leadResp=await resp.json()
    console.log(resp.status())
    console.log(leadResp)
})


test(`Update specific Lead in sf`,async({request})=>{
    const resp=await request.patch(`${baseUrl}/services/data/v62.0/sobjects/Lead/${leadId}`,{
       headers:{
           "Content_Type":"application/json",
           "Authorization":`Bearer ${accessToken}`
               },
               data:{
                "salutation":"Mr",
                "firstname":"Aksaj"
               }
    })

      console.log(resp.status())
  
})


test(`Delete specific Lead in sf`,async({request})=>{
    const resp=await request.delete(`${baseUrl}/services/data/v62.0/sobjects/Lead/${leadId}`,{
       headers:{
           "Content_Type":"application/json",
           "Authorization":`Bearer ${accessToken}`
               },
    })

      console.log(resp.status())
  
})

test(`Get the deleted Lead in sf`,async({request})=>{
    const resp=await request.get(`${baseUrl}/services/data/v62.0/sobjects/Lead/${leadId}`,{
       headers:{
           "Content_Type":"application/json",
           "Authorization":`Bearer ${accessToken}`
               },
    })

    const leadResp=await resp.json()
    console.log(resp.status())
    console.log(leadResp)
})




})