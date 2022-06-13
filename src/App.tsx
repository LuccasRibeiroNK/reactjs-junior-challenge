import "./App.css";
import Index from "./components/Pages/Index";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage";

function App() {
  return (
    <>
      <Container>
        <MainPage />
      </Container>
    </>
  );
}

export default App;
