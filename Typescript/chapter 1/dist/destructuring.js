"use strict";
{
    //  destructuring
    var user_1 = {
        id: 3012,
        name: {
            first: "Salman",
            last: "Farsi",
        },
        number: 13454543222,
        address: "finland",
    };
    var number = user_1.number, first = user_1.name.first, address_1 = user_1.address;
    // array destructuring
    var friends_1 = ["Monica", "Ross", "Phoebe", "Joey"];
    var firstFriend = friends_1[0], secondFriend = friends_1[1], restFriends = friends_1.slice(2);
    console.log(restFriends);
}
