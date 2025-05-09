// Object, Optional, and Literal Types in TypeScript

{
  // 1. Object Types
  let user: { name: string; age: number } = {
    name: "Mr Bean",
    age: 21,
  };

  // 2. Optional Properties (?)
  let products: { name: string; price: number; quantity?: number } = {
    name: "Mango",
    price: 560,
  };

  // 3. Literal Types
  let status: "success" | "error" | "loading";
  status = "success";
  // status = "failure"; (It will give an error bcz it is not a valid literal)

  
  // Combine Everything
  const alert: {
    message: string;
    type: "info" | "warning" | "error";
    read?: boolean;
  } = {
    message: "Low battery!",
    type: "warning",
  };
}
