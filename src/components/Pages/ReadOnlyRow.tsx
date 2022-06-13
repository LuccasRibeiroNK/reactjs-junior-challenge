const ReadOnlyRow = ({ user }) => {
  return (
    <>
      <td>{user.name}</td>
      <td>{user.company}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>{user.isActive ? "Ativo" : "Inativo"}</td>
    </>
  );
};

export default ReadOnlyRow;
