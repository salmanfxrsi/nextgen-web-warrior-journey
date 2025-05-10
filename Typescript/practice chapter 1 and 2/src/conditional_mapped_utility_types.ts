{
  // Conditional Types
  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<string>;
  type B = IsString<number>;

  // Mapped Types (Mapped types let you transform properties of an existing type)
  type User = {
    name: string;
    age: number;
  };

  type ReadOnlyPerson = {
    readonly [K in keyof User]: User[K];
  };

  // Utility Types (Utility types are pre-built mapped types provided by TypeScript to make development easier)
  type Person = {
    name: string;
    age: number;
  };

  // Partial
  type PartialPerson = Partial<Person>; // { name?: string; age?: number; }

  // Pick
  type JustName = Pick<Person, "name">; // { name: string }

  // Omit
  type WithoutAge = Omit<Person, "age">; // { name: string }

  // Record
  type Role = "admin" | "user";
  type RolePermission = Record<Role, boolean>; // { admin: boolean, user: boolean }
}
