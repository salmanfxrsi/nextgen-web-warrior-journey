// Learning Function - 1) Normal Function 2) Arrow Function

function add(num1 : number, num2 : number = 0) {
    return num1 + num2;
}

const addArrow = (num1: number, num2: number) => {
    return num1 + num2;
}

// Object --> Function --> Method
const poorUser = {
    name: "Salman",
    balance: 0,
    addBalance (balance: number) : string {
        return `My new balance is : ${this.balance + balance}`;
    }
}


const arr : number[] = [1, 4, 10];

const newArr : number[] = arr.map((element : number) : number => element * element);