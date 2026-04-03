
let username="vidya"
console.log(username.split('i'))
console.log(username.split('').reverse().join(''))
//''->split at every position
let sentence ="Learning Js in Testleaf"
console.log(sentence.split("").reverse().join(""))


let companyName="Testleaf"
console.log(companyName.substring(3,4))

//T,e,s,t,l,e,a,f
//-8,-7,-6,-5,-4,-3,-2,-1
//it will print -->tle
console.log(companyName.slice(-5,-2))

let price="Rs.1235"
console.log(price.replace("Rs","$"))
console.log(price.replace("Rs.","$"))
console.log(price.replace("Rs.","$")+1)

let num=parseInt(price.replaceAll("Rs.",''))
console.log(num+1)

let fileName="My Project:Final Version(1).pdf"
let safeFileName = fileName.replaceAll(/[^a-zA-Z0-9.]/g, "_");
console.log(safeFileName)


//  /[^0-9]/g-->returns number
// /[^a-zA-z]/g -->returns characters
// /\d/g-->digits
///\D/g -->all characters
// /\w/g  -->matches all characters in the word and _
///\W/g -->NOT word characters





