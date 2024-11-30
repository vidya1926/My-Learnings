import { Page } from "playwright";
import { LoginPage } from "./login";

export class HomePage extends LoginPage{
    
    constructor(page:Page){
        super(page)
    }

    async clickCrmsfa(){
        await this.page.locator("text=CRM/SFA").click()
    }

}