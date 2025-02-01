import { LeadsPage } from "./LeadsPage";


export class CreateLead extends LeadsPage{


    async enterMandatory(fname:string,lname:string,cname:string){
        await this.page.fill("",fname)
        await this.page.fill("",lname)
        await this.page.fill("",cname)


    }


    
}