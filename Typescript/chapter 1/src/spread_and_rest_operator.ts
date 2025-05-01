{
  // Spread operator
  // Rest operator
  // Destructuring

  //   learn spread operator
  const bros1: string[] = ['Siam', 'Salman', 'Atif', 'Sami', 'Kalam'];            
  const bros2: string[] = ['Tonmoy', 'Nahid', 'Alif', 'Alex', 'Sayef'];
  
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Salman",
    redux: "Alex",
    dbms: "Green",
  }

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    dbms: "Nahid",
  }

  const mentorList = {
    ...mentors1,
    ...mentors2,
  }

  const greetingFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
        console.log(`Hello ${friend}`);
    })
  }

  greetingFriends("Salman", "Atif", "Sami", "Kalam");
}
