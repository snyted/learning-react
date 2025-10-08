import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./index.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/detalhe/:id" element={<Detail />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
