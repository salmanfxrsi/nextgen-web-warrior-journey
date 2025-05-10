{
    //  Constraints (Constraints allow you to restrict the types that can be passed into a generic function or class. This means you can enforce that a certain type must meet specific requirements)
    const getProperty = <T, K extends keyof T> (obj: T, key: K): T[K] => {
        return obj[key];
    }

    const user = {
        id: 1,
        name: "Mr Bean",
        roll: "admin",
        country: "bangladesh",
    }

    console.log(getProperty(user, "country"));
}