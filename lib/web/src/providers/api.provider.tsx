import axios from "axios";
import React, { useEffect } from "react";
import { ApiContextType } from "../common/types";

const ApiContext = React.createContext<ApiContextType | null>(null);

const ApiProvider: React.FC = ({ children }) => {
  const [aarvitragePair, setAarvitragePair] = React.useState("");

  useEffect(() => {
    console.log(aarvitragePair);
  }, [aarvitragePair]);

  const requestAarvitragePair = async () => {
    const ticker = await axios.post(
      "https://aarvitrage-api.arch-server.com/ccxt/tickers",
      {
        exchangeId: "binance",
        symbols: aarvitragePair,
      }
    );
    console.log(ticker);
    return ticker.data;
  };
  return (
    <ApiContext.Provider
      value={{
        setAarvitragePair,
        requestAarvitragePair,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
