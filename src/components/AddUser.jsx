import React, { useState } from "react";

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
    props.onAddUser(userData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          onChange={(e) => changeHandler("userName", e.target.value)}
          value={userData.userName}
        />
        <label htmlFor="userAge">Age(Years)</label>
        <input
          type="number"
          onChange={(e) => changeHandler("userAge", e.target.value)}
          value={userData.userAge}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
