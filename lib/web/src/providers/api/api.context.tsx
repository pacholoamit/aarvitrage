import React from "react";
import { ApiContextType } from "../../common/types";

const ApiContext = React.createContext<ApiContextType | null>(null);

export default ApiContext;
