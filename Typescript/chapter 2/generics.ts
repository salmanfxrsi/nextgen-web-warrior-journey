{
// Generics
type GenericArray<T> = Array<T>;

// const name: string[] = ["Alex", "Green", "Michel"];
const name: GenericArray<string> = ["Alex", "Green", "Michel"];

// const age: number[] = [20, 34, 53, 78, 89];
const age: GenericArray<number> = [20, 34, 53, 78, 89];

// const isAdmin: boolean[] = [false, true, true, false];
const isAdmin: GenericArray<boolean> = [false, true, true, false];

interface User {
    name: string;
    age: number;
}

const user : GenericArray<User> = [
    {
        name: "Farsi",
        age: 100,
    },
    {
        name: "Farsi",
        age: 100,
    },
    {
        name: "Farsi",
        age: 100,
    },
    {
        name: "Farsi",
        age: 100,
    },
    {
        name: "Farsi",
        age: 100,
    },
]

// Generic Tuple 
type Student<X, Y> = [X, Y]; 
const student : Student<number, {name: string, age: number}> = [1, {name: "Alex", age: 53}];

//
}