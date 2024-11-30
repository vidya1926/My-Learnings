import { HomePage } from "./hompage"
import { LoginPage } from "./login"
import {test as basetest} from '@playwright/test'

type leaftapsFixture={
    loginFixture:LoginPage
    homeFixture:HomePage
}

export const test =basetest.extend<leaftapsFixture>({
    loginFixture:async({page,context},use)=>{
       const lp= new LoginPage(page,context)
        await lp.loadUrl("http://leaftaps.com/opentaps/control/login")
        await lp.enterCredentials()
        await lp.clickLogin()
        await lp.context.storageState({path:"./loginDatalp.json"})
        await use(lp)
    },
    homeFixture:async({page,context},use)=>{
        const hp=new HomePage(page,context)
        await hp.loadUrl("http://leaftaps.com/opentaps/control/login")
        await  use(hp)
    }
    })