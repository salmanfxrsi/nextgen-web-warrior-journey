// A type alias is a way to define a new name for an existing type. This allows you to give a more descriptive name to complex types and use them consistently throughout your code.

{
  type TRole = "user" | "admin" | "superAdmin";

  type TUser = {
    name: string;
    age: number;
    role: TRole;
  };

  const user: TUser = {
    name: "Mr Bean",
    age: 31,
    role: "admin",
  };
}
