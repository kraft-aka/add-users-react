import React from "react";
import Card from "./Card";

export default function UsersList(props) {
  return (
    <Card className="users">
      userList
      {props.data.map((item) => (
        <ul key={item.userAge} >
          <li>Unsername: {item.userName}. Age:{item.userAge}</li>
        </ul>
      ))}
    </Card>
  );
}
