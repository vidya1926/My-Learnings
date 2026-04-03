

function greet(username){
    console.log("Hello " +username)
}

greet("Vidya")
greet("user123")
greet(123)


let sum= function add(a,b){
       return a+b
}
sum(2,3)

function mul(a,b){
    let c=a*b
    console.log(c)
}
mul(sum(3,4),2)


//function types
let math=((a,b)=>a*b)

console.log(math(sum(3,2),4))

let anonymous=function (){
    console.log("I am from anonymous function")
}
anonymous()