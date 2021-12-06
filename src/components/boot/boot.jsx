import React from "react";
import { useSelector } from "react-redux";
import AddBoot from "./AddBoot";
import DeleteBoot from "./DeleteBoot";
import UpdateBoot from "./UpdateBoot";

export default function Boot() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <div>
        <h1>Add</h1>
        <AddBoot />
      </div>
      <div>
        <h1>Delete</h1>
        <DeleteBoot />
      </div>
      <div>
        <h1>Edit</h1>
        <UpdateBoot />
      </div>
      <h3>Listado de usuarios</h3>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {user.email}-{user.name}-{user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
