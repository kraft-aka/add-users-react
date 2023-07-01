import { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [user, setUser] = useState([]);

  function addUser(newUser) {
    setUser((prevUser) => {
      return [newUser, ...prevUser];
    });
  }

  
  return (
    <>
      <h1>Add Users</h1>
      <AddUser onAddUser={addUser} />
      <UsersList data={user} />
    </>
  );
}

export default App;
