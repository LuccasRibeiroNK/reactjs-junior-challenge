import "./App.css";
import Index from "./components/Pages/Index";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage";
import Search from "./components/Pages/Search";
import OldSearch from "./components/Pages/OldSreach";

function App() {
  return (
    <>
      <Container>
        <MainPage />

        {/* <OldSearch /> */}
      </Container>
    </>
  );
}

export default App;
