import axios from "axios";
import React from "react";
import ApiContext from "./api.context";

const ApiProvider: React.FC = ({ children }) => {
  const [arbitragePair, setArbitragePair] = React.useState("");
  const [arbitragePairResult, setArbitragePairResult] = React.useState(null);

  const requestArbitragePair = async () => {
    const ticker = await axios.post(
      "https://aarvitrage-api.arch-server.com/arbitrage/pairs",
      {
        tradePair: arbitragePair,
      }
    );
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
