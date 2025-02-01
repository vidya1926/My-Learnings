import { CreateLead } from "./CreateLeadPage";


export class ViewLeadPage extends CreateLead{

  async verifyLeadName(){
    return await this.page.locator("").innerText()
  }

}