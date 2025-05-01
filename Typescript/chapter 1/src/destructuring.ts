{
  //  destructuring

  const user = {
    id: 3012,
    name: {
        first: "Salman",  
        last: "Farsi",
    },
    number: 13454543222,
    address: "finland",
  };

  const { number, name: { first }, address} = user;

  // array destructuring
  
  const friends = ["Monica", "Ross", "Phoebe", "Joey"];
  const [firstFriend, secondFriend, ...restFriends] = friends;
  console.log(restFriends);
}
