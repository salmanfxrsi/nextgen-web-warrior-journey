{
    // Union (Union means a variable can hold a multiple types)
    type TValue = string |  number;
    let value: TValue = "Farsi";
    value = 21;
    // value = true;

    // Intersection (An intersection type means a value must have all the properties of multiple types)
    type TUser1 = {
        name: string,
        age: number,
    }

    type TRoll = { roll: string };

    const user: TUser1 & TRoll = {
        age: 21,
        name: "Mr Bean",
        roll: "admin"
    }
}