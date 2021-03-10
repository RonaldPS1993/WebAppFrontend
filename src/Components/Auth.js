
import React, {Component, useState} from 'react';
//import React, {useState} from "react";
//import { Link } from "@reach/router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import './Auth.css';
import { Redirect } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import SignUp from './SignUp';


function Auth() {



  //login state
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  //return message to user for verification of login success 
  const [loginStatus, setLoginStatus] = useState('');


  //connect login to backend and verify info in DB with Axios
  const  login= (props) => {
    Axios.post('http://localhost:3001/api/users/login', {
      email: email,
      passwords: password,
}).then ((response) => {
    if(response.data.message) {
        setLoginStatus(response.data.message)
    } else{
        return (response.data.results)//message displaying invalid email oir or password is not working 
    }
});
};

  return (
    <div className="GeekText">
    <form className="auth-form">
      <div className="form-control">
      <label htmlFor="email">Email</label>
          <input type="email"
          onChange={(e) => {
              setEmail(e.target.value);
          }}
          />
          </div>
          <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" 
          onChange={(e) => {
            setPassword(e.target.value);
        }}
        />
       </div>
       
        <div className="form-actions">
        <button onClick={login}>Login</button>
        <button type="button" onClick= {SignUp}>Switch to Sign Up</button>
          
          
          </div>
          </form>

          
          <h1>{loginStatus}</h1>
          </div>
        
    );


}export default Auth;