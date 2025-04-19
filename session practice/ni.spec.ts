import test from "@playwright/test";

test(`Monitoring Network interception`,async({page})=>{
 await page.goto("https://login.salesforce.com/")
 //monitoring the request and response
 page.on('request',request=>{
    console.log(`<<--Request--->>`,request.method(),request.url(),request.postData());
  })
page.on('response', async response => {
   const headers = await response.allHeaders();
   console.log(`<<---Responses --->>`,  headers);
 });
  await page.fill("#username","vidyar@testleaf.com")
 await page.fill("#password","Sales@123")
 await page.click("#Login")
 await page.waitForTimeout(5000)
 await page.title()
})


test.only(`To abort the images from loading`,async({page})=>{
   await page.route("**/*.{jpg,svg,png}",route=>route.abort())
   await page.goto("https://www.salesforce.com/")
   await page.title()
   
})


test(`Modififying the request `,async({page})=>{
   await page.goto("https://login.salesforce.com/")

   await page.route("**/aura?preloadActions",async(route,request)=>{
       console.log(request.postData())
       await route.continue({headers:
         {
         date: 'Sat, 20 Apr 2025 08:08:20 GMT',
         },
         postData:{
            "aura:token":""
         }
       })      
    })

    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")
    await page.waitForTimeout(5000)
    await page.title()
   
})


test(`Modifying response`,async({page})=>{

   await page.goto("https://login.salesforce.com/")

   await page.route("**/aura?preloadActions",async(route,request)=>{
   await route.fulfill({
      status: 200,
      contentType: 'application/json',
      headers: {
        date: 'Sun, 21 Apr 2025 08:08:20 GMT'
      },
      body: JSON.stringify({ result: "This is a mocked response for future date." })
    });

    page.on('response', async (response) => {
      const url = response.url();
      const headers = response.headers();
      if (url.includes('aura?preloadActions')) {
        console.log('✅ Mocked response for:', url);
        console.log(headers);
      }
    });
  })



  await page.fill("#username","vidyar@testleaf.com")
  await page.fill("#password","Sales@123")
  await page.click("#Login")
  await page.waitForTimeout(5000)
  await page.title()
 
})