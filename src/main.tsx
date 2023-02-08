import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "styled-components";
import { StepContextProvider } from "./contexts/StepContext";
import { defaultTheme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <StepContextProvider>
        <App />
      </StepContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
