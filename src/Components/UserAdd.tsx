import React, { useRef, useState } from "react";
import './UserAdd.css'
import axios from "axios";

const UserAdd:React.FC<{
  Axiosfn:() => void;
}> = (props) => {

  const {Axiosfn} = props;

  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')

  const RefPass:any = useRef();

  const SubBtn=() =>{
    const UsrReq = {
      email,
      password,
      id: Math.random(),
      date: new Date()
    }
    console.table(UsrReq)
    setEmail('')
    setPassword('')

    axios({
      method:'post',
      url:'http://localhost:3001/add',
      data: UsrReq
      }).then(
        (res)=>{console.log("res", res)
        Axiosfn();}
      ).catch(
        (err)=>{console.log("error", err)}
      )
  }
  
  return (
    <div>
      <form >
      <div>
        <input className="input"
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
          setEmail(e.target.value);
          }}
          placeholder="username"
        />
      </div>
      <div>
        <input className="password"
          type="password"
          id="password"
          value={password}
          ref={RefPass}
          onChange={(e) => {
          setPassword(e.target.value);
          }}
          placeholder="password"
          autoComplete="yes"
        />
      </div>
      <button  
      type="button" 
      className="button" 
      
      onClick={SubBtn}>Add User</button>
      
      </form>
    </div>
  );
};

export default UserAdd;
