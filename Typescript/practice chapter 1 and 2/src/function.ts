{
 function greet(name: string): string {
    return `Hello ${name}!`;
 }   

 function welcome(name?: string): string {
    return name ? `Welcome ${name}` : "Guest";
 }

 type TMultiply = (x: number, y?: number) => number;

 const multiply: TMultiply = (num1, num2 = 1) => {
    return num1*num2;
 }

 const throwError = (): never => {
    throw new Error("Something went wrong!");
 }
 }