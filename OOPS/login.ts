import { Page } from "playwright";

 export class LoginPage{
 
    page:Page
    username:string="demoCSR"
    password:string="crmsfa"

    constructor(page:Page){
        this.page=page
    }

    async loadUrl(){
        await this.page.goto("http://leaftaps.com/opentaps/control/login")
    }

    async enterCredentials(){
        await this.page.locator("#username").fill(this.username)
        await this.page.locator("#password").fill(this.password)
    }
    async clickLogin(){
        await this.page.locator(".decorativeSubmit").click()
            }   


}
