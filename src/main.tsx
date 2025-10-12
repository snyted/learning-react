import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ShowHideComponent from "./exercises/ex-03";
import { VisibilityManager } from "./exercises/ex-03/VisibilityManager";
// import InputControlled from "./exercises/ex-02";
// import Counter from "./exercises/ex-01";
// import "./mocks/server.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   {/* <ShowHideComponent /> */}
   <VisibilityManager />
   </StrictMode>
);
