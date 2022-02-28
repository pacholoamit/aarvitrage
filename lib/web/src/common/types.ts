import { AxiosResponse } from "axios";

export type ApiContextType = {
  arbitragePair?: string;
  setArbitragePair?: React.Dispatch<React.SetStateAction<string>>;
  requestArbitragePair: () => Promise<AxiosResponse<any, any>>;
};
