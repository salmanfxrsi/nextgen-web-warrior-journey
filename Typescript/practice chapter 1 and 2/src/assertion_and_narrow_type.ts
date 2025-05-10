{
  // Assertion (It doesn’t convert the type — it just tells the compiler to treat it as a certain type)
  let someValue: unknown = "Hello";
  let strLength = (someValue as string).length;

  // Narrowing (Type narrowing is when TypeScript infers a more specific type based on runtime checks)
  function printValue(value: string | number) {
    if (typeof value === "string") {
      console.log(value.toUpperCase()); 
    } else {
      console.log(value.toFixed(2)); 
    }
  }

  type Admin = { role: string };
  type User = { username: string };

  function identify(person: Admin | User) {
    if ("role" in person) {
      console.log("Admin role:", person.role);
    } else {
      console.log("User:", person.username);
    }
  }
}
