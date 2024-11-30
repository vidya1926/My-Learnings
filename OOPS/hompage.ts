import { BrowserContext, Page } from "playwright";
import { LoginPage } from "./login";

export class HomePage extends LoginPage{
    
    constructor(page:Page,context:BrowserContext){
        super(page,context)
    }

    async clickCrmsfa(){
        await this.page.locator("text=CRM/SFA").click()
    }

}