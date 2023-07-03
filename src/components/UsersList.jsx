import React from "react";
import Card from "./Card";
import './UsersList.css'

export default function UsersList(props) {
  return (
    <Card className="users">
      {props.data.map((user) => (
        <ul>
          <li>
            {user.userName} {user.userAge} years old
          </li>
        </ul>
      ))}
    </Card>
  );
}
