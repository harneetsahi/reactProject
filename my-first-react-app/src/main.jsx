import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { Greeting } from "./Greeting.jsx"; // named import
import Greeting from "./Greeting.jsx"; // default import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
