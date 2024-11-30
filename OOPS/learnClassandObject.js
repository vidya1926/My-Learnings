"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Launchbrowser = void 0;
var accessmodifier_1 = require("./accessmodifier");
var Launchbrowser = /** @class */ (function () {
    function Launchbrowser() {
        //properties
        //browserType=chromium
        //headless=false 
        //method
        //loadurl () -->enter the url  
        this.browserName = "Chromium";
        this.headless = false;
        //this-->represt current class property and method
    }
    Launchbrowser.prototype.loadUrl = function () {
        console.log("loading the url in the ".concat(this.browserName, " browser in ").concat(this.headless));
        return this;
    };
    Launchbrowser.prototype.enterCredentials = function () {
        return this;
    };
    return Launchbrowser;
}());
exports.Launchbrowser = Launchbrowser;
//object -reference to the class
var variable = new Launchbrowser(); //default constructor
variable.loadUrl();
variable.enterCredentials();
//method chaining
new Launchbrowser().loadUrl().enterCredentials();
//allocates the memory and initializes the object
new accessmodifier_1.learnAccessmodifier().printDetails();
