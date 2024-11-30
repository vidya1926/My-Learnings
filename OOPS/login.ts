import { BrowserContext, Page } from "playwright";
import {test} from '@playwright/test'

 export class LoginPage{
 
    page:Page
    context:BrowserContext
    username:string="demoCSR"
    password:string="crmsfa"

    constructor(page:Page,context:BrowserContext){
        this.page=page
        this.context=context
    }

    async loadUrl(url:string){
     await test.step(`Entering url`,async()=>{
        await this.page.goto(url)
        })
    }

    async enterCredentials(){
        await this.page.locator("#username").fill(this.username)
        await this.page.locator("#password").fill(this.password)
    }
    async clickLogin(){
        await this.page.locator(".decorativeSubmit").click()
            }   

    async verifyTitle(){
      return  await this.page.title()
    }

}

