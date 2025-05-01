{
// Type Alias

type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
};

const student1: Student  = {
    name: "John Doe",
    age: 60,
    gender: "Male",
    contactNo: "01864644",
    address: "Dhaka, Bangladesh",
};

const student2: Student = {
    name: "ALex",
    age: 50,
    gender: "Male",
    address: "Finland",
}

type Tutor = string;
const tutor1 : Tutor = "Mr Green";

type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;


//
}