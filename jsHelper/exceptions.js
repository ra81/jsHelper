//
// Свои исключения
// 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(argument, message) {
        var _this = this;
        var msg = "argument";
        if (message)
            msg += " " + message;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return ArgumentError;
}(Error));
var ArgumentNullError = /** @class */ (function (_super) {
    __extends(ArgumentNullError, _super);
    function ArgumentNullError(argument) {
        return _super.call(this, argument) || this;
    }
    return ArgumentNullError;
}(Error));
