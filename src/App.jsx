import { useState } from "react";
import AddUser from "./components/AddUser";
import './App.css'
import UsersList from "./components/UsersList";

function App() {
  const [user, setUser] = useState([]);

  function addUser(newUser) {
    setUser((prevUser) => {
      return [...prevUser, newUser];
    });
    console.log(user)
  }

  
  return (
    <>
      <AddUser onAddUser={addUser} />
      <UsersList data={user} />
    </>
  );
}

export default App;
