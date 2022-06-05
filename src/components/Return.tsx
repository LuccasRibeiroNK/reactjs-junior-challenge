import React from "react";
import { Container, Form } from "reactstrap";
import Index from "./Index";
import { C } from "./styled";
import users from "./Index";

export default function Return() {
  return (
    <Form>
      <>
        <C className="mt-5">
          <table className="table ">
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
                  <>
                    <td>
                      <button className="btn btn-primary">Edit</button>{" "}
                      <button className="btn btn-danger">Delete</button>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.company}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>{user.isActive ? "true" : "false"}</td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
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
              {/* <input
                type="text"
                value={active}
                placeholder="Is Active?"
                onChange={(e) => setActive(active)}
              /> */}
              <input
                type="text"
                value={id}
                placeholder="guid"
                onChange={(e) => setId(e.target.value)}
              />
              <button onClick={postData} className="btn btn-primary">
                Add
              </button>
            </nav>
          </Container>
        </C>
      </>
    </Form>
  );
}
