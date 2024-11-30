import test from '@playwright/test'
import { createLead, generateToken, getLead } from './apiUtility'
import { faker } from '@faker-js/faker'

const lname=faker.person.lastName()
const cname=faker.company.buzzNoun()
let searlname:string

test.beforeEach("Create leaad tjrogh API",async({page})=>{
await generateToken();
await createLead(page.request,lname,cname) 
searlname= await getLead(page.request)
})

test.use({storageState:'creds/sfLogin.json'})
test(`Search Lead`,async({page})=>{
await page.goto("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
await page.waitForLoadState('load')
await page.locator(".slds-icon-waffle").click()
const viewAllButton = page.locator("//button[text()='View All']")
await viewAllButton.click()
await page.getByPlaceholder("Search apps or items...").fill("Leads")
await page.waitForLoadState('load')
await page.locator("//mark[text()='Leads']").click({timeout:20000})
await page.waitForLoadState('load')
await page.getByPlaceholder("Search this list...").fill(searlname)

})