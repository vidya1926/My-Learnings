import test, { Page } from "@playwright/test";

export abstract class PlaywrightWrapper{


  page:Page

    constructor(page:Page){
      this.page=page
    }
     

    public async loadUrl(url:string,name:string){
      test.step(`Loading the ${url}`,async()=>{
          await this.page.goto(url)
      })

    }

    public async clearAndType(selector:string,name:string,data:string){
      test.step(`Entering the ${data} in ${name} textbox`,async()=>{
          try {
            const ele=this.page.locator(selector)
            await ele.clear()
            await ele.fill(data)
          } catch (error) {
              console.log(error)
          }
      })     
    }   

    public async verifyTitle(){
       await this.page.title()
    }


}