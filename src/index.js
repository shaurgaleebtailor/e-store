import { createRoot } from "react-dom/client";
import App from "./App.js";
import ContxtProvider from "./components/Context/GlobalCntxt.js";
import "./index.scss";

let root = createRoot(document.getElementById("root"));
root.render(
  <ContxtProvider>
    <App />
  </ContxtProvider>
);
