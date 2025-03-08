import test, { BrowserContext, chromium, firefox } from '@playwright/test'
import path from 'path'
let context: BrowserContext;


test.beforeAll(async () => {
    context = await chromium.launchPersistentContext('./user-data', {
    headless: false,
    });
    });

test(Learning normal browser in guest mode,async()=>{
     const page=await context.newPage()
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")
})


test(Learning normal browser reusing persistent,async()=>{
   const page=await context.newPage()
   await page.goto("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
   await page.getByTitle("App Launcher",{exact:true}).click()
  })


  test.afterAll(``,async()=>{
   await context.close()
  })
