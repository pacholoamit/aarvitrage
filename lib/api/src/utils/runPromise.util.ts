const runPromise = async (promise: Promise<any>) => {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

export default runPromise;
