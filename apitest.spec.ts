import test, { expect } from '@playwright/test'
test("Learning basic CSS locator",async({page,request})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")

    //  const eleCount=await page.locator(".inputLogin").count()
    //  console.log(eleCount)
const inputEle=page.locator(".inputLogin")
const eleCount=await inputEle.count()
console.log(eleCount)

await inputEle.nth(0).fill("demoCSR")
await inputEle.nth(1).fill("crmsfa")    
await page.locator(".decorativeSubmit") .click()
await page.locator("text=CRM/SFA").click()
const response = await request.post("https://leaftaps.com/crmsfa/control/createLeadForm", {
  data: {
    companyName: "TestLeaf",
    firstName: "Vidya",
    lastName: "Bharathi"
  }
});
  console.log(response.status())


})