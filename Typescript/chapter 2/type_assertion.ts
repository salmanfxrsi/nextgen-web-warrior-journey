{
  // ==================== Type Assertion / Type Narrowing ====================

  // We declare a variable with type 'any' which means it can hold any type of value
  let anything: any;

  // Assigning different types of values
  anything = "Typescript";
  anything = 222;

  // Using Type Assertion to treat 'anything' as a number
  anything as number; // Doesn't do anything here but shows how assertion is done

  // ==================== Function to Convert Kilogram to Gram ====================

  // This function takes either a string or number as input and returns a string or number
  const kgToGm = (value: string | number): string | number | undefined => {
    // If the input is a string, parse it into a float and multiply by 1000
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `Converted Value Is ${convertedValue} gm`; // Returns a string
    }

    // If the input is a number, directly multiply it by 1000 and return
    if (typeof value === "number") return value * 1000; // Returns a number
  };

  // Using the function with a string and using type assertion to say the result will be a string
  const result1 = kgToGm("1000") as string;

  // Using the function with a number and asserting that the result will be a number
  const result2 = kgToGm(1000) as number;

  // Printing the results to the console
  console.log(result1, result2); // Output: Converted Value Is 1000000 gm 1000000

  // ==================== Custom Error Handling with Type Assertion ====================

  // Creating a custom error type
  type CustomError = {
    message: string;
  };

  // Using try-catch block to handle any errors
  try {
    // Your code that might throw error goes here
  } catch (error) {
    // Using type assertion to tell TypeScript that error is of type CustomError
    console.log((error as CustomError).message);
  }

  //
}
