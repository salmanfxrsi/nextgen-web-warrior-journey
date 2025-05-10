{
    // Spread Operator
    const num1: number[] = [1, 2, 3, 4, 5, 6];
    const num2: number[] = [7, 8, 9, 10, 11, 12];
    const numAll = [...num1, ...num2];
    
    const user = { name: "Farsi", age: 21 };
    const location = { country: "BD" };
    const fullProfile = { ...user, ...location };
    

    // Rest Operator
    const sum = (...numbers: number[]): number => {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }

    console.log(sum(...num1, ...num2));
}