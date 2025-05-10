{
  // generic constrain with keyof operator

  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr X",
    age: 54,
    address: "Dhaka",
  };

  const car = {
    name: "Supra",
    model: "X6564",
    isNew: true,
  };

  const result = getPropertyValue(car, "isNew");
  console.log(result);

  // const res = user['address'];
  // console.log(res);
}
