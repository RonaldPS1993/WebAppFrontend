//import React, {Component} from 'react';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Axios from "axios";

function cart1() {
  
return (
    <div className="GeekText">
    <div className="cart">
      <h3>Shopping Cart</h3>
      <Link to="/cart/CreateCart">Create Shopping Cart</Link>
      <br></br>
      <Link to="/cart/currentcart">View current cart</Link>
      <br></br>
          </div>
          </div>

    );

}
export default cart1;
