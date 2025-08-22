
function checkMenu(pizzaType,orderPizza){
    console.log("Select pizzaType from menucard")
    setTimeout(() => {
        console.log("pizza to order")
        orderPizza(pizzaType,waitTOPrepare)
    }, 2000);
}

function orderPizza(pizza,prepare){      
     console.log("pizza ordered" + pizza)
     setTimeout(()=>{
             prepare()
     },3000)
}

function waitTOPrepare(){
    console.log("Pizza is getting prepared")
}
checkMenu("DoubleCheese",orderPizza)

console.log("Oder intiated")
//////////////////////////////////////////////////////////////////////////////////

// Step 1: Select pizza from menu
function checkMenu(pizzaType) {
    return new Promise((resolve, reject) => {
        console.log("Select pizzaType from menucard");
        setTimeout(() => {
            console.log("Pizza to order: " + pizzaType);
            resolve(pizzaType); // pass pizzaType to next step
        }, 2000);
    });
}

// Step 2: Order pizza
function orderPizza(pizza) {
    return new Promise((resolve, reject) => {
        console.log("Pizza ordered: " + pizza);
        setTimeout(() => {
            resolve(); // move to preparation step
        }, 3000);
    });
}

// Step 3: Wait for pizza preparation
function waitToPrepare() {
    console.log("Pizza is getting prepared");
}

// Execute the flow using Promises
console.log("Order initiated...");
checkMenu("DoubleCheese")
    .then(orderPizza)
    .then(waitToPrepare)
    .catch(err => console.log("Error:", err));
