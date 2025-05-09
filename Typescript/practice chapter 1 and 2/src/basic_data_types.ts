// A data type tells the compiler what kind of data a variable will hold — whether it's a number, string, boolean, or something else. TypeScript uses this information to catch potential bugs before runtime.

{
    // 1. Number
    let age: number = 10;
    let price: number = 500.54;

    // 2. String 
    let firstName: string = "Mr. X";
    let greeting: string = `Hello, ${firstName}`;
    
    // 3. Boolean 
    let isLoggedIn: boolean = true;
    let isAdmin: boolean = false;

    // 4. Undefined and Null
    let notDefined = undefined;
    let nothingHere = null;

    // 5. Any (Use any only when necessary, or you might lose all the benefits of TypeScript)
    let anything: any = 5;
    anything = false;
    anything = "now a string";

    // 6. Unknown (Alternative of Any but must check its type before using it)
    let value: unknown = "Hello";

    // 7. Void (Used for functions that do not return anything)
    function sayHello(): void {
        console.log("Hello World!");
    }

    // 8. Never (This type represents values that never occur. Mostly used for functions that throw errors or run infinitely)
    function newError(): never {
        throw new Error("Something went wrong!");
    }

    // 9. Object
    let user: object = {
        name: "Mr. Green",
        age: 30,
        class: 11,
        role: "admin",
    }

    // 10. Array 
    let ages: number[] = [23, 54, 32, 45, 76];
    let student: [number, string] = [1, "Mr. Maxwell"];
}