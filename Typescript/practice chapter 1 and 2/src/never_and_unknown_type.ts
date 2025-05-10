{
    // Never 
    function throwError (): never {
        throw new Error("Something went wrong");
    }

    // Unknown
    let value: unknown;
    value = "Hello";
    value = 10;
    value = false;
}