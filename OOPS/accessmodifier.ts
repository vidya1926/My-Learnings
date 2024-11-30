import { Launchbrowser } from "../learnClassandObject"


export class learnAccessmodifier{
    public empName:string
    public empId:string
    private salary:number
    protected phno:number

   constructor(){
     this.empName="Ramya"
     this.empId="emp17"
     this.salary=40000
     this.phno=8974678592
   }

   printDetails(){
    console.log(`The employee details are ${this.empName} : ${this.empId} :${this.salary} :${this.phno}`)
   }

   public get readData(){
    return this.salary
   }

   public set setData(sal:number){
       this.salary=sal
   }
}

const accMod=new learnAccessmodifier()
console.log(accMod.empId)
console.log("Old value " +accMod.readData)
accMod.setData=500000
console.log("New value "+accMod.readData)




