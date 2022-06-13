import { Routes, Route } from "react-router-dom";
import Index from "./Index";
import Cadastro from "./Cadastro";

function MainPage() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default MainPage;
