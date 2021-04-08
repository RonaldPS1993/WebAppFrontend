import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import * as ReactBootStrap from "react-bootstrap";
import Axios from "axios";

function Change({match}) {
  
    useEffect(() => {
        getWishNum();
    },[]);
    
    const[message, setMess] = useState('');
    const[message2, setMess2] = useState('');
    const[wishlist,setWishlists] = useState([]);
    const[wishlistArr,setArr] = useState([]);
    const[objToChange,setobj] = useState(match.params.book_count_id);
    const[newWish,setWish] = useState(0);

    const renderWishlist = (wishlists,index) => {
        return (
            <tr key={index}>
                <td>{wishlists.cart_name}</td>
                <td>{wishlists.cart_id}</td>
            </tr>
        )
    }

    const  getWishNum= () => {
        setMess('');
        Axios.get(`http://localhost:3001/api/wishlist/getwishnum/${match.params.customer_id}`).then((response) => {
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


    const  changeItem= () => {
        
        Axios.patch("http://localhost:3001/api/wishlist/changewish",{
            cart_id:newWish,
            book_count_id:objToChange
        }).then((response) => {
            if(response.data.success === 1){
                setMess2("Item sucesfully changed to " + newWish);
            }else{
                setMess2("The id is not correct");
            }
            
            console.log(response);
             
        });
        
    }


    return (
        <div className="GeekText">
        <div className="createwish">
            <h1>Change Item Menu</h1>
            <br></br>
            <p>Provide the cart_id of the wishlist you wish to change</p>
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
            <button onClick={getWishNum}>Get Wishlists</button>
            <br></br>
            <p>{message}</p>
            <br></br>
            <label>Wishlist id</label>
            <input 
                type= "text" 
                onChange={(e) => {
                setWish(e.target.value);
                }}
            />
            <br></br>
            <button onClick={changeItem}>Change Item</button>
            <br></br>
            <p>{message2}</p>
            <br></br>
            <Button component={Link} to="/wishlist">
                Return
            </Button>
        </div>
        </div>
    );

}
export default Change;