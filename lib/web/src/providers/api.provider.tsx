import axios from "axios";
import React from "react";
import { ApiContextType } from "../common/types";

const ApiContext = React.createContext<ApiContextType | null>(null);

const ApiProvider: React.FC = ({ children }) => {
  const [arbitragePair, setArbitragePair] = React.useState("");

  const requestArbitragePair = async () => {
    const ticker = await axios.post(
      "https://aarvitrage-api.arch-server.com/arbitrage/pairs",
      {
        tradePair: "hello",
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

export { ApiContext, ApiProvider };
