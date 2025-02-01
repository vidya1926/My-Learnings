import {test as baseTest} from '@playwright/test'
import { Login } from '../pages/LoginPage'
import {  WelcomePage } from '../pages/CRMPage'
import { CreateLead } from '../pages/CreateLeadPage'
import { LeadsPage } from '../pages/LeadsPage'
import { ViewLeadPage } from '../pages/ViewLeadPage'


type leaftapsFixture={
    lp:Login
    wp:WelcomePage
    leadspage:LeadsPage
    createLead:CreateLead
    viewLead:ViewLeadPage
}

export const test=baseTest.extend<leaftapsFixture>(
    {
  lp:async({page},use)=>{
    const loginPage=new Login(page)    
    await use(loginPage)
  },

  wp:async({page},use)=>{
       const welcp=new WelcomePage(page)
       use(welcp)
  },
  leadspage:async({page},use)=>{
    const ledspage=new LeadsPage(page)
    use(ledspage)
  },

  createLead:async({page},use)=>{
    const cpage=new CreateLead(page)
    use(cpage)
  },

  viewLead:async({page},use)=>{
    const vpage=new ViewLeadPage(page)
    use(vpage)
  }



})