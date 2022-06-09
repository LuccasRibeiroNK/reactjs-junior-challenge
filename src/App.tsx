import "./App.css";
import Index from "./components/Index";
import { Container } from "reactstrap";
import Cadastro from "./components/Pages/Cadastro";

function App() {
  return (
    <>
      <Container>
        <Index />
        <Cadastro />
      </Container>
    </>
  );
}

export default App;
