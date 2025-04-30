//  Reference Type --> Object

const user : {
    readonly company: "Digital Resolution"; // type --> literal types
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: "Digital Resolution",
    firstName: "Salman",
    lastName: "Farsi",
    isMarried: false,
};