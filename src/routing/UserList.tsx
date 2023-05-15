import { Link, Outlet } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "Tomas" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <ul className="list-group flex-fill">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;