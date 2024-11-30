import { HomePage } from "./hompage"
import { LoginPage } from "./login"
import {test as basetest} from '@playwright/test'

type leaftapsFixture={
    loginFixture:LoginPage
    homeFixture:HomePage
}

export const test =basetest.extend<leaftapsFixture>({
    loginFixture:async({page},use)=>{
        await use(new LoginPage(page))
    },
    homeFixture:async({page},use)=>{
       await  use(new HomePage(page))
    }
    })