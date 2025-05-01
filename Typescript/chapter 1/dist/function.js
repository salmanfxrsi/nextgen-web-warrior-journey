"use strict";
{
    // Learning Function - 1) Normal Function 2) Arrow Function
    function add(num1, num2) {
        if (num2 === void 0) { num2 = 0; }
        return num1 + num2;
    }
    var addArrow = function (num1, num2) {
        return num1 + num2;
    };
    // Object --> Function --> Method
    var poorUser = {
        name: "Salman",
        balance: 0,
        addBalance: function (balance) {
            return "My new balance is : ".concat(this.balance + balance);
        }
    };
    var arr = [1, 4, 10];
    var newArr = arr.map(function (element) { return element * element; });
}
