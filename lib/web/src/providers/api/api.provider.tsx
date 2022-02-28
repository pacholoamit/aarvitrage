import axios from "axios";
import React from "react";
import ApiContext from "./api.context";

const ApiProvider: React.FC = ({ children }) => {
  const [arbitragePair, setArbitragePair] = React.useState("");

  const requestArbitragePair = async () => {
    const ticker = await axios.post(
      "https://aarvitrage-api.arch-server.com/arbitrage/pairs",
      {
        tradePair: arbitragePair,
      }
    );
    console.log(ticker.data);
    return ticker.data;
  };
  return (
    <ApiContext.Provider
      value={{
        setArbitragePair,
        requestArbitragePair,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
