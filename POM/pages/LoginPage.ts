import { chromium, expect, Page } from "@playwright/test"
import loginData from "../data/loginCredentials.json"
import  {urlConstants}  from "../constants/urlConstants"
import { PlaywrightWrapper } from "../utitliy/pwUtiltiy"
import { WelcomePage } from "./CRMPage"

export class Login extends PlaywrightWrapper{

  page:Page
   
  // url:string
  // username:string
  // password:string

    public selectors={
      userSelector:"#username",
      passwordSelector:"#password",
      loginbutton:".decorativeSubmit",
      crmLink:`text=CRM/SFA`,
      leads:{
           LeadsLink:"//a[text()='Leads']"
      },

      accounts:{

      },
      opportunity:{

      }
    }  

  constructor(page:Page){
    super(page)
    this.page=page
    this.verifyTitle()
    }  
 
  async navigate(){       
        await this.loadUrl(urlConstants.baseUrl,"Leaftaps")
        return this

  }

  async enterCredentials(){
        await this.clearAndType(this.selectors.userSelector,"Username",loginData.username)
        await this.clearAndType(this.selectors.passwordSelector,"Password",loginData.password)
        return this
  }

  async clickLogin(){
    await this.page.click(this.selectors.loginbutton)
    return new WelcomePage(this.page)
  }

}

