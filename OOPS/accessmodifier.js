"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.learnAccessmodifier = void 0;
var learnClassandObject_1 = require("../learnClassandObject");
var learnAccessmodifier = /** @class */ (function (_super) {
    __extends(learnAccessmodifier, _super);
    function learnAccessmodifier() {
        var _this = _super.call(this) || this;
        _this.empName = "Ramya";
        _this.empId = "emp17";
        _this.salary = 40000;
        _this.phno = 8974678592;
        return _this;
    }
    learnAccessmodifier.prototype.printDetails = function () {
        console.log("The employee details are ".concat(this.empName, " : ").concat(this.empId, " :").concat(this.salary, " :").concat(this.phno));
    };
    Object.defineProperty(learnAccessmodifier.prototype, "readData", {
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(learnAccessmodifier.prototype, "setData", {
        set: function (sal) {
            this.salary = sal;
        },
        enumerable: false,
        configurable: true
    });
    return learnAccessmodifier;
}(learnClassandObject_1.Launchbrowser));
exports.learnAccessmodifier = learnAccessmodifier;
var accMod = new learnAccessmodifier();
console.log(accMod.empId);
console.log("Old value" + accMod.readData);
accMod.setData = 500000;
console.log("New value " + accMod.readData);
