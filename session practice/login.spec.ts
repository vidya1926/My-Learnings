import {test} from '@playwright/test'
import { LoginPage } from './loginPage'

test(`Learning oops with playwright`,async({page})=>{  
    const login =new LoginPage(page)
    await login.enterCredentials()
    await login.clickLogin()  
    
})