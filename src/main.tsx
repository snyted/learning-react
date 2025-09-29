import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TodoList } from "./assets/pages/TodoList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <TodoList />
  </StrictMode>
);
