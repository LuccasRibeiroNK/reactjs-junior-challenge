import { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Form } from "reactstrap";
import { C } from "../styled";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Cadastro() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [active, setActive] = useState("");
  const [id, setId] = useState("");
  const [notas, setNotas] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/clients")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postData = (e: any) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/clients", {
      guid: uuidv4(),
      name: name,
      company: company,
      email: email,
      phone: phone,
      address: address,
      isActive: true,
      notas: notas,
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.response.data);
      }
    );
  };

  return (
    <Router>
      <Container>
        <h2>Add a Contact</h2>
        <nav>
          <input
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={company}
            placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            value={address}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="text"
            value={id}
            placeholder="guid"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            className="notas"
            type="text"
            value={notas}
            placeholder="Notas"
            onChange={(e) => setNotas(e.target.value)}
          />
          <button onClick={postData} className="btn btn-primary">
            Add
          </button>
          <div className="container">
            <button onClick={postData} className="btn btn-danger">
              Salvar
            </button>
            <Link to="/">
              <button className="btn btn-secondary">Cancelar</button>
            </Link>
          </div>
        </nav>
      </Container>
    </Router>
  );
}

export default Cadastro;
