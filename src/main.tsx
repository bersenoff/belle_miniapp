import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { App } from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
