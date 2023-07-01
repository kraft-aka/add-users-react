import React, { useState } from "react";
import Card from "./Card";
import "./AddUser.css";

export default function AddUser(props) {
  const [userData, setUserData] = useState({ userName: "", userAge: "" });

  function changeHandler(input, value) {
    setUserData((prevData) => {
      return {
        ...prevData,
        [input]: value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    if (userData.userName.trim().length === 0 && userData.userAge < 0) return;
    props.onAddUser(userData);
    console.log(userData)
  }

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label htmlFor="userName" className="label">
          Username
        </label>
        <input
          className="input"
          type="text"
          onChange={(e) => changeHandler("userName", e.target.value)}
          value={userData.userName}
        />
        <label htmlFor="userAge" className="label">
          Age(Years)
        </label>
        <input
          className="input"
          type="number"
          onChange={(e) => changeHandler("userAge", e.target.value)}
          value={userData.userAge}
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}
