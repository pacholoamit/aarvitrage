import { AxiosResponse } from "axios";
import React, { useEffect } from "react";

const useQuery = (request: Promise<AxiosResponse>) => {
  const [response, setResponse] = React.useState({});

  useEffect(() => {
    request
      .then(({ data }) => {
        setResponse(data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return { response };
};

export default useQuery;
