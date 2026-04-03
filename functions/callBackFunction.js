function watchNetflix(userlogin, pwd, onHistory, onRecommended) {
    console.log("Authenticating user:", userlogin)
    if (pwd === "12324") {
        console.log("Login successful")
        console.log("Fetching your watch history...")
        onHistory();
        console.log("Fetching recommended movies...")
        onRecommended();
    } else {
        console.log("Invalid password. Access denied.")
    }
}

function history() {
    console.log("History:", "SpiderMan", "Final Destination");
}

function recommended() {
    console.log("Recommended:", "Interstellar");
}

watchNetflix("Vid123", "12324", history, recommended);

// //Callbacks allow:
// - async operations
// - waiting for API responses
// - waiting for timers
// - event handling
// - custom behavior
// - reusability


function firstInfo(callback) {
    setTimeout(() => {
        console.log("Calling first function");
        callback();
    }, 3000);
}

function secondInfo(callback) {
    setTimeout(() => {
        console.log("Second Info");
        callback();
    }, 3000);
}

function thirdInfo() {
    setTimeout(() => {
        console.log("Third function");
    }, 3000);
}

// CALLBACK HELL (pyramid shape)
firstInfo(function () {
    secondInfo(function () {
        thirdInfo();
    });
});