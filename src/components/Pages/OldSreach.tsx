import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

/**
 * Total registos (total_count) 39556
 * total por pagina 9
 * Total de paginas: 12356/9 = 4395
 * pagina ativa: 1
 */

export default function OldSearch() {
  const [page, setPage] = useState(0);
  const [selectPage, setSelectPage] = useState(0);
  const [perPage, setPerPage] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [login, setLogin] = useState("");
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    console.log("DEBUG click");
    setPage(0);
  };
  useEffect(() => {
    console.log("DEBUG effect");
    if (login) {
      fetch(
        `https://api.github.com/search/users?q=${login}&in:login&per_page=${perPage}&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const total = Math.ceil(data.total_count / perPage);
          console.log(total);
          setTotalPages(total);
          setTotalRecords(data.total_count);
          setUsers(data.items);
        });
    }
  }, [page, perPage]);

  const generatePagination = () => {
    const elem = [];
    for (let x = 0; x < totalPages; x++) {
      elem.push(
        <option key={x} value={x}>
          {x + 1}
        </option>
      );
    }
    console.log(elem);
    return elem;
  };

  const handlePageChange = (e) => {
    setSelectPage(e.currentTarget.value);
    setPage(e.currentTarget.value);
  };

  const handlePerPageChange = (perPage) => {
    setPerPage(perPage);
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
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

  return (
    <div>
      <input type="text" value={login} onChange={handleLoginChange} />
      <button onClick={() => handleClick()}>Search</button>

      {page}
      <div>
        <button onClick={handleFirst}>{"<<"}</button>
        <button onClick={handlePrevious}>{"<"}</button>

        <select value={selectPage} onChange={handlePageChange}>
          {generatePagination()}
        </select>

        <button onClick={handleNext}>{">"}</button>
        <button onClick={handleLast}>{">>"}</button>
      </div>

      <div className="container"></div>
    </div>
  );
}
