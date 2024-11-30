import { test } from "./myfixture"

test(`Learning oops with playwright`,async({loginFixture,homeFixture})=>{   
    await loginFixture.loadUrl()   
    await loginFixture.enterCredentials()
    await loginFixture.clickLogin()
    await homeFixture.clickCrmsfa()    
})