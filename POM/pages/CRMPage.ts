import { Page } from "@playwright/test";
import { Login } from "./LoginPage";

export class WelcomePage extends Login{

constructor(page:Page){
    super(page)
}
 async clickCRM(){
     await this.page.click(this.selectors.crmLink)
 }

 async clickLogout(){
    await this.page.click("")
}

}