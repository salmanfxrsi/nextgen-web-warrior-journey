{
  const { id, name, role }: { id: number; name: string; role: string } = {
    id: 0,
    name: "Farsi",
    role: "admin",
  };

  console.log(id, name, role);

  const [x, y]: [number, number] = [12, 13];

  const user = {
    name: "Farsi",
    age: 21,
    country: "Bangladesh",
  };

  const { age, country } = user;

  function printUser({ name, age }: { name: string; age: number }) {
    console.log(`${name} is ${age} years old.`);
  }

  printUser({ name: "Farsi", age: 21 });
}
