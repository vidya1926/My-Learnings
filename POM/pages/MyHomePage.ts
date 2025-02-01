import { Page } from "@playwright/test";
import {  WelcomePage } from "./CRMPage";

export class MyHomePage extends WelcomePage{

    // constructor(page:Page){
    //     super(page)
    // }

async clickLeads(){
    await this.page.click(this.selectors.leads.LeadsLink)
    return this
}

async clickAccount(){
    await this.page.getByRole("link",{name:"Accounts"}).click()
}


async clickOPPortunity(){
    await this.page.getByRole("link",{name:"Opportunity"}).click()
}

}