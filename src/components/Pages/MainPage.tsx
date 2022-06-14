import { Routes, Route } from "react-router-dom";
import Index from "./Index";
import Cadastro from "./Cadastro";
import Search from "./Search";

function MainPage() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default MainPage;
