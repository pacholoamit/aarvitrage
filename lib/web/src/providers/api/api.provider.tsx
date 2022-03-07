import axios from "axios";
import React from "react";
import ApiContext from "./api.context";

const apiUrl = import.meta.env.VITE_API_URL;

const ApiProvider: React.FC = ({ children }) => {
  const [arbitragePair, setArbitragePair] = React.useState("");
  const [arbitragePairResult, setArbitragePairResult] = React.useState(null);

  const requestArbitragePair = async () => {
    const ticker = await axios.post(`${apiUrl}/arbitrage/pairs`, {
      tradePair: arbitragePair,
    });
    //Note: Add localstorage cache
    setArbitragePairResult(ticker.data);
  };

  return (
    <ApiContext.Provider
      value={{
        arbitragePair,
        setArbitragePair,
        arbitragePairResult,
        setArbitragePairResult,
        requestArbitragePair,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
