import React from "react";
import Card from "./Card";
import "./UsersList.css";

export default function UsersList(props) {
  return (
    <Card className="users">
      <ul>
        {props.data.map((user) => (
          <li key={user.userAge + Math.random().toString()}>
            {user.userName} {user.userAge} years old
          </li>
        ))}
      </ul>
    </Card>
  );
}
