import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./mocks/server.ts"

import App from "./App.tsx";
import { Timer } from "./components/LearningHooks/useRef/Timer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   {/* <App /> */}
   <Timer />
  </StrictMode>
);
