{
  interface User {
    name: string;
  }

  interface User {
    age: number;
  }


  const user : User = {
    name: "Farsi",
    age: 18,
  }

  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const dog : Dog = {
    name: 'Poco',
    breed: 'German',
  }
}