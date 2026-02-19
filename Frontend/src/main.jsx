import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { AppProviders } from "./app/providers";

createRoot(document.getElementById("root")).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
