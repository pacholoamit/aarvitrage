const handlePromise = async (promise: Promise<any>) => {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

export default handlePromise;
