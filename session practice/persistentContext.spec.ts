import test, { chromium, firefox } from "@playwright/test"

test(``,async()=>{
     
   const usedir="./userDataDir"
    const context = await chromium.launchPersistentContext(usedir, {
        headless:false,
      
    })
    const page = await context.newPage();
    await page.goto("https://leafground.com/auth.xhtml");
     
})




test(`Sub`,async()=>{
     
   
    const context = await chromium.launchPersistentContext(`usedir`, {
        headless:false,
       
    })
    const page = await context.newPage();
    await page.goto("https://leafground.com/");
    

    
})

// export const t=test.extend({login:async({page},use)=>{

//     await use(page)
// }})