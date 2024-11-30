import { APIRequestContext, chromium, expect } from "@playwright/test";

export async function generateToken(){
   const browser=await chromium.launch()
    const context=await browser.newContext()
    const request=context.request;

    const res=await request.post("https://login.salesforce.com/services/oauth2/token",{
     
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
    const sfRes=await res.json()
    return {
        accToken:sfRes.access_token,
        instUrl:sfRes.instance_url
    }
}

let id:any
export async function createLead(request:APIRequestContext,lname:string,cname:string){
    const res=await request.post(`${(await generateToken()).instUrl}/services/data/v62.0/sobjects/Lead`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${(await generateToken()).accToken}`
        },
        data:{
            "lastname":`${lname}`,
            "company":`${cname}`
        }
    })

     const leadRes=await res.json()
     console.log(leadRes)
     id=leadRes.id    
}

export async function getLead(request:APIRequestContext):Promise<string>{
    const res=await request.get(`${(await generateToken()).instUrl}/services/data/v62.0/sobjects/Lead/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${(await generateToken()).accToken}`
        }
    })
    const leaRes=await res.json()
    expect(res.status()).toBe(200)
    console.log(leaRes.LastName)
    return leaRes.LastName
}