import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import "./AddUser.css";
import ErrorModal from "./ErrorModal";

const userInfo = { userName: "", userAge: "" };

export default function AddUser(props) {
  const [userData, setUserData] = useState(userInfo);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState();

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
    if (!userData.userName || !userData.userAge) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      setShowModal(true);
      return;
    }
    if (+userData.userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      setShowModal(true);
      return;
    }
    props.onAddUser(userData);
    setUserData(userInfo);
    //console.log(userData);
  }

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          className="input"
          type="text"
          id="username"
          onChange={(e) => changeHandler("userName", e.target.value)}
          value={userData.userName}
        />
        <label htmlFor="userAge" className="label">
          Age(Years)
        </label>
        <input
          className="input"
          type="number"
          id="age"
          onChange={(e) => changeHandler("userAge", e.target.value)}
          value={userData.userAge}
        />
        <Button type="submit">Add User</Button>
      </form>
      {showModal && (
        <ErrorModal
          title={error.title}
          message={error.message}
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
    </Card>
  );
}
