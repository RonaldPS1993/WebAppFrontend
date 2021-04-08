//import React, {Component} from 'react';
import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

function CurrentWishlist() {

    //declaration of states
    const[username, setUsernameReg] = useState('');
    const[message, setMess] = useState('');
    const[link,setLink] = useState("http://localhost:3001/api/wishlist/getwishnum/");
    const[wishlist,setWishlists] = useState([]);
    const[wishlistArr,setArr] = useState([]);

    const renderWishlist = (wishlists,index) => {
        return (
            <tr key={index}>
                <td><Link to={`/wishlist/display/${wishlists.cart_id}/${username}`}>{wishlists.cart_name}</Link></td>
                <td>{wishlists.cart_id}</td>
            </tr>
        )
    }

    const  getWishNum= () => {
        setMess('');
        Axios.get(link).then((response) => {
            setWishlists(response.data);
            console.log(response);
            if(wishlist.length == 0){   
                setMess("You don't have any wishlist or re-push the button");
            }else{
                console.log(wishlist);  
                setArr(Object.entries(wishlist)[1][1]);  
                console.log(wishlistArr); 
                if(wishlistArr.length == 0){
                    setMess("You don't have any wishlist or re-push the button");
                }else{
                    setMess('');
                }
            }
             
    });
    };

    return (
        <div className="GeekText">
            <h1>Your current wishlists</h1>
            <br></br>
            <label>Email</label>
            <input 
                type= "text" 
                onChange={(e) => {
                setUsernameReg(e.target.value);
                setLink("http://localhost:3001/api/wishlist/getwishnum/"+e.target.value);
                }}
            />
            <br></br>
            <button onClick={getWishNum}>Get Wishlists</button>
            <br></br>
            <p>Click on a wishlist to access its contents ,and add an item</p>
            <br></br>
            <p>{message}</p>
            <br></br>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Wishlist name</th>
                        <th>Wishlist id</th>
                    </tr>
                </thead>
            <tbody>
                {wishlistArr.map(renderWishlist)}
            </tbody>
            </ReactBootStrap.Table>
            <br></br>
            <Button component={Link} to="/wishlist">
                Return
            </Button>
            
        </div>
    );

}
export default CurrentWishlist;
