class ElementAction{

        public click(element:string):void;

        public click(element:string,forceClick:boolean):void;


        public click(element:string,forceClick?:boolean):void{
            if(forceClick){
                console.log(`click the ${element} forcibily`)
            }
        }

}

const webEle=new ElementAction()
webEle.click("Login")
webEle.click("Login",true)


class PageAction extends ElementAction{

      public click(element:string,forceClick?:boolean){
          console.log(`${element} to be clicked with delay`)
      }

}

const act=new PageAction();
act.click("Submit button")