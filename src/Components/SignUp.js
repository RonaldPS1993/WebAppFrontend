
//import React, {Component} from 'react';
import React, {useState} from "react";
//import { Link } from "@reach/router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";


function SignUp() {
    //createUser state
    const[usernameReg, setUsernameReg] = useState('')
    const[passwordReg, setPasswordReg] = useState('')

    //connect signup/createuser to backend and enter info to DB with Axios
  const  signUp= () => {
    Axios.post('http://localhost:3001/api/users/', {
      email: usernameReg,
      passwords: passwordReg,
}).then ((response) => {
    console.log(response);
});
};

return (
    <div className="GeekText">
    <div className="createUser">
      <h1>Create Account</h1>
          <label>Email</label>
          <input 
            type= "text" 
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <label>Password</label>
          <input 
            type="text"
            onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          /></div>
          <button onClick={signUp}>Sign Up</button>
          </div>

          );

          

}
export default SignUp;