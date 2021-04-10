//import React, {Component} from 'react';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Axios from "axios";

function CreateWish2({match}) {
  
    //createUser state
    const[username, setUsernameReg] = useState(match.params.customer_id);
    const[wishlistname, setWishlistName] = useState('');

    //return message to user for verification
    const [wishstatus, setwishstatus] = useState('');

    //conenct to backend
    const  createWish= () => {
        Axios.post('http://localhost:3001/api/wishlist/createwish', {
            customer_id: username,
            cart_name: wishlistname,
    }).then ((response) => {
        if(response.data.data.affectedRows === 0){
            console.log("You already have 3 wishlists.\n");
            setwishstatus("You already have 3 wishlists.");
        }else{
            setwishstatus("Wishlist sucesfully created");
        }
        console.log(response);
        
    });
    };


    return (
        <div className="GeekText">
        <div className="createwish">
            <h1>Create Wishlist</h1>
            <label>Wishlist Name</label>
            <input 
                type="text"
                onChange={(e) => {
                setWishlistName(e.target.value);
                }}
            /> 
            <br></br>
            <button onClick={createWish}>Create New Wishlist</button>
            <br></br>
            <p>{wishstatus}</p>
            <br></br>
            <Button component={Link} to={`/wishlist/${username}`}>
                Return
            </Button>
        </div>
        </div>
    );

}
export default CreateWish2;