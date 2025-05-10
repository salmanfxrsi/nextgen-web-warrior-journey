{
  // promise

  // simulate
  const createPromise = () : Promise<boolean> => {
    return new Promise <boolean> ((resolve, reject) => {
      const data: boolean = true;
      if (data) {
        resolve(data);
      } else {
        reject('failed to load data');
      }
    });
  };

  // calling create promise function
  const showData = async () : Promise<boolean> => {
    const data = await createPromise();
    return data;
  }

  showData();

  //
}
