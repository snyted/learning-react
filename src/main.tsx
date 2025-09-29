import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./mocks/server.ts";
import { TodoList } from "./pages/TodoList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <TodoList />
  </StrictMode>
);
