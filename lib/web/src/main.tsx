import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApiProvider, ThemeProvider } from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
