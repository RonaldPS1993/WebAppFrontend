//import React, {Component} from 'react';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Axios from "axios";

function WishlistMenu({match}) {
  
    const[username, setUsernameReg] = useState(match.params.customer_id);

return (
    <div className="GeekText">
    <div className="wishlistMenu">
      <h1>Wishlist options</h1>
      <Link to={`/createwish/${match.params.customer_id}`}>Create Wishlist</Link>
      <br></br>
      <Link to={`/currentwish/${match.params.customer_id}`}>View current wishlists</Link>
      <br></br>
          </div>
          </div>

    );

}
export default WishlistMenu;
