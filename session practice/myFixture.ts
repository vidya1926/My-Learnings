import {test as baseTest} from '@playwright/test'
import { Login } from './LoginPage'
import { HomePage } from './HomePage'


type leaftapsFixture={
    lp:Login
    hp:HomePage
    
}



baseTest.beforeEach(async ({ page }) => {
  // Add custom methods to Page globally
  page.delayedFill = async (selector: string, value: string) => {
    await page.locator(selector).fill(value);
    await page.waitForTimeout(500); // Delay after fill
  };

  page.clickAndDelay = async (selector: string) => {
    await page.locator(selector).click();
    await page.waitForTimeout(500); // Delay after click
  };
});
export const test=baseTest.extend<leaftapsFixture>(  
    {
  lp:async({page},use)=>{
    const loginPage=new Login(page)
    await loginPage.navigate()
    await loginPage.enterCredentials()
    await loginPage.clickLogin()
    await use(loginPage)
  },

  hp:async({page},use)=>{
       const hompg=new HomePage(page)
       use(hompg)
  }
  
})