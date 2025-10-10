import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./exercises/exercise-01";
// import "./mocks/server.ts"



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Counter />
  </StrictMode>
);
