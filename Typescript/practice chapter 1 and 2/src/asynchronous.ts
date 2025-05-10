{
  const promiseExample = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Loaded!");
    }, 2000);
  });

  async function getUserData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const user = await response.json();
      console.log(user);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  getUserData();
}
