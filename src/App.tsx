import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserAdd from "./Components/UserAdd";

const App = () => {
  const [users, setUsers] = useState([]);

  const  Axiosfn =() =>{
    axios.get("http://localhost:3001/users")
    .then((res) => {
      const { allUsers } = res.data;
      console.log("res", res.data);
      setUsers(allUsers);
    })
    .catch((err) => {
      console.log("err", err);
    });
  }
  useEffect(() => {
    Axiosfn();
  },[]);
  const Userlog = users.map((usr: any, index) => {
    return (
      <p key={usr.id}>
        <span className="userid">User ID :</span> <span className="idx">{index} =: </span>{usr.email}
      </p>
    );
  });
  return (
    <div className="App">
      <h2 className="heading">Users </h2>
     <div className="obj">{Userlog}</div> 
      <br></br>
      <UserAdd  Axiosfn={Axiosfn}/>
    </div>
  );
};

export default App;
