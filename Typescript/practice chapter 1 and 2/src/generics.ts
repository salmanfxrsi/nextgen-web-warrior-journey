{
  const identity = <T>(input: T): T => {
    return input;
  };

  const identityResult1 = identity<string>("Hello");
  const identityResult2 = identity<number>(2);

  const getFirstElement = <T>(input: T[]): T => {
    return input[0];
  };

  const getFirstElementRes = getFirstElement([1, 2, 3, 4, 5, 6, 7]);

  interface ApiResponse<T> {
    status: number;
    data: T;
  }

  const userResponse: ApiResponse<{ name: string; age: number }> = {
    status: 200,
    data: {
      name: "Salman",
      age: 22,
    },
  };
}
