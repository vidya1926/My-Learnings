import {test} from "../session practice/customFixture";

test(`Login test Functionality`,async({loginPage})=>{  
  console.log(await loginPage.title())
  await loginPage.locator("text=CRM/SFA")
})
