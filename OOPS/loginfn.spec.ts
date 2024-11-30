import { test } from "./myfixture"

test(`Login functionality with session storage`,async({loginFixture})=>{   
     console.log(await loginFixture.verifyTitle())
})