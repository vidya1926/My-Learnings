let companyName=["Testleaf","Qeagle","Google"]
console.log(companyName.at(0))



console.log(companyName.length)
//to add and remove the data

companyName.push("EY") //add at the end 
console.log(companyName)
companyName.unshift("Meta")
console.log(companyName)//adds at the front
companyName[8]="IBM"
console.log(companyName)


companyName.shift()//removes first element
companyName.pop()//removes the last ele
console.log(companyName)

let browserDetails=["Chrome",120.3,"Chromium",true]
console.log(browserDetails)

browserDetails.slice() //extract the data from the array
companyName.splice(1,2,"Meta","AWS")
console.log(companyName)

let numArray=[2,3,5,2,6,7]
numArray.sort()
console.log(numArray)

companyName.sort()
console.log(companyName)


let num=[2,3,15,2,26,7]
num.sort((a,b)=>a-b)


num.forEach(numEle => {
    //console.log(numEle)
    if(numEle==15){
        console.log(numEle)
    }
});


for(const char of companyName){
    console.log(char.includes('e',0))
}