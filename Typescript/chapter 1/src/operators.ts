{
//

// ternary operator || optional chaining || nullish coalescing

const age: number = 18;

if(age >= 18) console.log("Adult");
else console.log("Not Adult")

const isAdult : string = age >= 18 ? "Adult" : "Not Adult";
console.log({ isAdult })

// nullish coalescing operator
// null / undefined --> decision making

const isAuthenticated = '';
const result1 = isAuthenticated ?? 'Guest';
const result2 = isAuthenticated ? isAuthenticated : 'Guest';
console.log({ result1, result2 });

type User = {
    name: string;
    address: {
        city: string;
        road: string;
        permanentAddress?: string;
        presentAddress: string;
    }
}

const user1: User = {
    name: "Farsi",
    address: {
        city: "Dhaka",
        road: "Dhaka 783",
        presentAddress: "Dhaka, Bangladesh"
    },
}

const permanentAddress = user1?.address?.permanentAddress ?? "No Permanent Address";
console.log({ permanentAddress });

//
}