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
var Amazon = /** @class */ (function () {
    function Amazon(user, pwd) {
        this.username = user;
        this.password = pwd;
        this.phno = 9873900259;
        this.loadurl();
    }
    Object.defineProperty(Amazon.prototype, "readaccess", {
        get: function () {
            return this.phno;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Amazon.prototype, "writeAccess", {
        set: function (pno) {
            this.phno = pno;
        },
        enumerable: false,
        configurable: true
    });
    Amazon.prototype.loadurl = function () {
        console.log("Amazon url is loded");
    };
    Amazon.prototype.doLogin = function () {
        console.log("Enter the username as ".concat(this.username, " and password as ").concat(this.password));
    };
    return Amazon;
}());
var SearhProduct = /** @class */ (function (_super) {
    __extends(SearhProduct, _super);
    function SearhProduct() {
        var _this = _super.call(this, "Hello", "@123") || this;
        _this.searchPdt();
        return _this;
    }
    SearhProduct.prototype.searchPdt = function () {
        _super.prototype.doLogin.call(this);
        this.username = "vidya";
        this.writeAccess = 8905593088;
        console.log("searchPdt with phno as user" + this.readaccess + "" + this.username);
    };
    return SearhProduct;
}(Amazon));
var pdt = new SearhProduct();
