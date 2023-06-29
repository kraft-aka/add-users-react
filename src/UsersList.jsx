import React from "react";

export default function UsersList(props) {
  return (
    <div>
      userList
      {props.data.map((item) => (
        <div key={item.userAge}>
          <p>{item.userName}</p>
          <p>{item.userAge}</p>
        </div>
      ))}
    </div>
  );
}
