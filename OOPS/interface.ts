interface ElementActions{

     typeAndEnter():void;

     verifyTitle():string;

}


abstract class pageActions implements ElementActions{
    typeAndEnter(): void {       
    }
    verifyTitle(): string {
     return "title"
    }
}

class EleActionimpl implements ElementActions{
    typeAndEnter(): void {
        console.log("Create method to fill and Enter")
    }
    verifyTitle(): string {
       return "The page title"
    }
    
}