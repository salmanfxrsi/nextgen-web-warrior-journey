{
  // ✅ Nullable types — value can be string or null
  const searchName = (value: string | null) => {
    if (value) console.log("Searching");
    else console.log("There is nothing to search");
  };

  searchName(null); // Output: "There is nothing to search"

  // ✅ unknown type — need to check type before using
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} m/s`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} m/s`);
    } else {
      console.log("Wrong input");
    }
  };

  getSpeedInMeterPerSecond(null); // Output: "Wrong input"
  getSpeedInMeterPerSecond(100); // Output: Converted number speed
  getSpeedInMeterPerSecond("50 kmh"); // Output: Converted string speed

  // ✅ never type — used when a function never returns (throws error or infinite loop)
  const throwError = (msg: string): never => {
    throw new Error(msg); // This function never returns
  };

  throwError("lol"); // This will crash the program if not caught
}
