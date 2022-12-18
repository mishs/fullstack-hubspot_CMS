import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={new QueryClient()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
