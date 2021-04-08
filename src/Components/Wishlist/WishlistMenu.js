//import React, {Component} from 'react';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Axios from "axios";

function WishlistMenu() {
  
return (
    <div className="GeekText">
    <div className="wishlistMenu">
      <h1>Wishlist options</h1>
      <Link to="/wishlist/createwish">Create Wishlist</Link>
      <br></br>
      <Link to="/wishlist/currentwish">View current wishlists</Link>
      <br></br>
          </div>
          </div>

    );

}
export default WishlistMenu;
