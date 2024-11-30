class Amazon{

  public username:string
  public password :string
  private phno:number

    constructor(user:string,pwd:string){
        this.username=user
        this.password=pwd
        this.phno=9873900259
        this.loadurl()
    }

 public get readaccess(){
    return this.phno
 }

 
 public set writeAccess(pno:number){
     this.phno=pno
 }

    loadurl(){        
        console.log("Amazon url is loded")
              
            }
doLogin(){

    console.log(`Enter the username as ${this.username} and password as ${this.password}`)
}
    


}


class SearhProduct extends Amazon{
    
    constructor(){
        super("Hello","@123")
        this.searchPdt()

    }

    searchPdt(){
            super.doLogin()
            this.username="vidya"
            this.writeAccess=8905593088
            console.log("searchPdt with phno as user"+this.readaccess +""+this.username)
    }
   }


   const pdt=new SearhProduct()
