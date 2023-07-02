import React from "react";
import Card from "./Card";

export default function UsersList(props) {
  return (
    <Card className="users" >
      {props.data.map((item) => (
        <ul>
          <li key={Number(item.userAge) + 1}>
            {item.userName} {item.userAge}
          </li>
        </ul>
      ))}
    </Card>
  );
}
