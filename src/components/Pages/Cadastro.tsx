import { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Form } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { StyledC } from "./styled";

function Cadastro() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [active, setActive] = useState("");

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
    <StyledC>
      <Container>
        <h2 className="container">Dados do Cliente</h2>

        <nav>
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  value={name}
                  placeholder="Nome"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  value={company}
                  placeholder="Empresa"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  value={phone}
                  placeholder="Telefone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="endereco">
              <input
                type="text"
                value={address}
                placeholder="Endereço"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="container">
            <input
              className="notas"
              type="text"
              value={notas}
              placeholder="Notas"
              onChange={(e) => setNotas(e.target.value)}
            />
          </div>

          <div className="container">
            <div className="row">
              <div className="col">
                <button onClick={postData} className="btn btn-danger">
                  Salvar
                </button>
                <Link to="/">
                  <button className="btn btn-secondary">Cancelar</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </StyledC>
  );
}

export default Cadastro;
