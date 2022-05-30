import { useState, useEffect } from "react";
import Axios from "axios";
import { C } from "./styled";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [addFormData, setAddFormData] = useState({
    Fullname: "",
    Company: "",
    Email: "",
    Phone: "",
    Address: "",
    IsActive: true,
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

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
    <C className="mt-5 ">
      <table className="table">
        <thead>
          <tr>
            <th>Edit</th>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Is Active?</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.guid}>
              <td>{user.name}</td>
              <td>{user.company}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.isActive ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add a New Contact</h2>
      <form action="">
        <input
          type="text"
          name="Full Name"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Company"
          placeholder="Enter a company..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Email"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Phone"
          placeholder="Enter a phone..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Address"
          placeholder="Enter an address..."
          onChange={handleAddFormChange}
        />
        <button type="submit" className="btn btn-primary">
          {" "}
          Add
        </button>
      </form>
    </C>
  );
};

export default Index;
