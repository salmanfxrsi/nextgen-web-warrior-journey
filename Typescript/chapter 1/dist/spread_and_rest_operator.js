"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // Spread operator
    // Rest operator
    // Destructuring
    //   learn spread operator
    var bros1 = ['Siam', 'Salman', 'Atif', 'Sami', 'Kalam'];
    var bros2 = ['Tonmoy', 'Nahid', 'Alif', 'Alex', 'Sayef'];
    bros1.push.apply(bros1, bros2);
    var mentors1 = {
        typescript: "Salman",
        redux: "Alex",
        dbms: "Green",
    };
    var mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        dbms: "Nahid",
    };
    var mentorList = __assign(__assign({}, mentors1), mentors2);
    var greetingFriends = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) {
            console.log("Hello ".concat(friend));
        });
    };
    greetingFriends("Salman", "Atif", "Sami", "Kalam");
}
