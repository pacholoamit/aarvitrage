import { AxiosResponse } from "axios";

export interface ArbitragePairResult {
  exchangeId: string;
  tradePair: string;
  price: number;
  timestamp: number;
}

export type ApiContextType = {
  arbitragePair: string;
  setArbitragePair: React.Dispatch<React.SetStateAction<string>>;
  requestArbitragePair: () => Promise<any>;
  arbitragePairResult: ArbitragePairResult[] | null;
  setArbitragePairResult: React.Dispatch<React.SetStateAction<null>>;
};
