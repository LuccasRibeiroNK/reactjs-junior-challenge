import React, { useEffect, useState } from "react";
import api from "../../services/api";
import axios from "axios";

import { Link } from "react-router-dom";
import Colums from "./Colums";

function Search() {
  const [page, setPage] = useState(0);
  const [selectPage, setSelectPage] = useState(0);
  const [perPage, setPerPage] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState("");

  useEffect(() => {
    axios(
      `http://localhost:3001/clients?q=${login}&in:login&per_page=${perPage}&page=${page}`
    )
      .then((res) => setUsers(res.data))
      .then((data) => {
        console.log(data);
        const total = Math.ceil(data.total_count / perPage);
        console.log(total);
        setTotalPages(total);
        setTotalRecords(data.total_count);
      })
      .catch((err) => console.log(err));
  }, [page, perPage]);

  const generatePagination = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(
        <option key={i} value={i}>
          {i + 1}
        </option>
      );
    }
    console.log(pages);
    return pages;
  };

  const handlePageChange = (perPage: any) => {
    setPerPage(perPage);
  };

  const handleFirst = () => {
    setPage(0);
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const handleLast = () => {
    setPage(totalPages);
  };

  const handlePerPage = (e: any) => {
    setPerPage(e.target.value);
    setPage(0);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    axios
      .get(
        `http://localhost:3001/clients?q=${login}&in:login&per_page=${perPage}&page=${page}`
      )
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <h1>Frontend Challenge</h1>
        </div>
      </div>
      <div className="search">
        <input
          className="search-input"
          value={login}
          type="text"
          placeholder="Procurar por nome, empresa, telefone, email ou status"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <button className="btn btn-danger" onClick={handleSearch}>
          Procurar
        </button>
        {/* <button
          className="btn btn-danger"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Limpar
        </button> */}
        <button className="btn btnCadastrar btn-success">
          <Link
            to="/cadastro"
            style={{ textDecoration: "none", color: "white" }}
          >
            Cadastrar cliente
          </Link>
        </button>
      </div>
      <table className="table table-bordered ">
        <thead>
          <Colums />
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.guid}>
              <td>
                <img src={user.avatar} alt={user.name} className="avatar" />
              </td>
              <td>{user.name}</td>
              <td>{user.company}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? "Ativo" : "Inativo"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <div className="pagination-buttons">
          <button className="btn btn-primary" onClick={handleFirst}>
            Primeiro
          </button>
          <button className="btn btn-primary" onClick={handlePrevious}>
            Anterior
          </button>
          <button className="btn btn-primary" onClick={handleNext}>
            Próximo
          </button>
          <button className="btn btn-primary" onClick={handleLast}>
            Último
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
