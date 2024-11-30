import { test } from "./myfixture"


test.use({storageState:"./loginDatalp.json"})
test(`Login functionality with session storage`,async({homeFixture})=>{  
   await homeFixture.clickCrmsfa()
})