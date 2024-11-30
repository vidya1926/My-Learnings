import { BrowserContext, Page } from "playwright";
import {test} from '@playwright/test'

 export class LoginPage{
 
    page:Page
    context:BrowserContext
    username:string="demoCSR"
    password:string="crmsfa"


    public selectors={
        usernameSelector:"#username",
        passwordSelector:"#passowrd",
        loginbutton:".decorativeSubmit",
        crmClick:"text=CRM/SFA"
    }



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
        await this.page.fill(this.selectors.usernameSelector,this.username)
        await this.page.fill(this.selectors.loginbutton,this.password)
    }
    async clickLogin(){
        await this.page.click(this.selectors.loginbutton)
            }   

    async verifyTitle(){
      return  await this.page.title()
    }

}

