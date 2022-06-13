import { useState, useEffect } from "react";
import { Container, Form } from "reactstrap";
import { Styles } from "./styled";
import Axios from "axios";
import ReadOnlyRow from "./ReadOnlyRow";
import Colums from "./Colums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Index(data: any) {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/clients")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Form>
      <>
        <Styles className="mt-5">
          <div className="container">
            <div className="header">
              <div className="title">
                <h1>Frontend Challenge</h1>
              </div>
            </div>
          </div>

          <div className="search">
            <input
              className="search-input"
              type="text"
              placeholder="Procurar por nome, empresa, telefone, email ou status"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button className="btn btn-danger">Procurar</button>
            <button className="btn btnCadastrar btn-success">
              <Link
                to="/cadastro"
                style={{ textDecoration: "none", color: "white" }}
              >
                Cadastrar cliente
              </Link>
            </button>
          </div>
          <div>
            <table className="table table-bordered ">
              <thead>
                <Colums />
              </thead>
              <>
                <tbody>
                  {users.map((user: any) => (
                    <tr key={user.guid}>
                      <td>
                        <>
                          <button className="btn btn-danger">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button className="btn btn-primary">
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </>
                      </td>
                      <ReadOnlyRow user={user} />
                    </tr>
                  ))}
                </tbody>
              </>
            </table>
          </div>
        </Styles>
      </>
    </Form>
  );
}
