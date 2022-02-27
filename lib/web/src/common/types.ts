import { AxiosResponse } from "axios";

export type ApiContextType = {
  aarvitragePair?: string;
  setAarvitragePair?: React.Dispatch<React.SetStateAction<string>>;
  requestAarvitragePair: () => Promise<AxiosResponse<any, any>>;
};
