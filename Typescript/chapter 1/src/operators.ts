{
//

// ✅ Ternary Operator || Optional Chaining || Nullish Coalescing

const age: number = 18;

// Traditional if-else for age check
if (age >= 18) console.log("Adult");
else console.log("Not Adult");

// ✅ Ternary Operator – concise if-else
const isAdult: string = age >= 18 ? "Adult" : "Not Adult";
console.log({ isAdult });


// ✅ Nullish Coalescing Operator (??)
// Only checks for null or undefined (NOT '', 0, false)
const isAuthenticated = '';
const result1 = isAuthenticated ?? 'Guest'; // '' is not null/undefined, so returns ''
const result2 = isAuthenticated ? isAuthenticated : 'Guest'; // falsy check: '' is falsy, returns 'Guest'
console.log({ result1, result2 });


// ✅ Optional Chaining with Nullish Coalescing
type User = {
    name: string;
    address: {
        city: string;
        road: string;
        permanentAddress?: string;
        presentAddress: string;
    };
};

const user1: User = {
    name: "Farsi",
    address: {
        city: "Dhaka",
        road: "Dhaka 783",
        presentAddress: "Dhaka, Bangladesh"
    },
};

// Optional chaining checks if properties exist before accessing them
// Nullish coalescing ensures fallback if the value is null or undefined
const permanentAddress = user1?.address?.permanentAddress ?? "No Permanent Address";
console.log({ permanentAddress });

//
}