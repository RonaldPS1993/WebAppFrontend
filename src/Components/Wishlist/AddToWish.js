import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import * as ReactBootStrap from "react-bootstrap";
import Axios from "axios";

function AddToWish({match}) {
  
    useEffect(() => {
        getWishNum();
        console.log(username);
        console.log(bookIsbn);
        console.log(bookName);
    },[]);

    //create states

    const[username, setUsernameReg] = useState(match.params.customer_id);
    const[bookIsbn, setBook] = useState(match.params.book_isbn);
    const[bookName, setBookName] = useState(match.params.book_title);

    const[wishId, setId] = useState(0);

    const[message, setMess] = useState('');
    const[wishlist,setWishlists] = useState([]);
    const[wishlistArr,setArr] = useState([]);
    const[message3, setMess3] = useState('');

    //const body =document.body;


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
        Axios.get(`http://localhost:3001/api/wishlist/getwishnum/${username}`).then((response) => {
            setWishlists(response.data);
            console.log(response);
            if(wishlist.length == 0){   
                setMess("You don't have any wishlist to add yout item. Or try refreshing.");
            }else{
                console.log(wishlist);  
                setArr(Object.entries(wishlist)[1][1]);  
                console.log(wishlistArr); 
                    setMess('');
                
            }
             
    });
    };
    

    
    const  addItem= () => {
        if(message == '' || wishId != 0){
            Axios.post('http://localhost:3001/api/wishlist/addtowish',{
            cart_id:wishId,
            book_isbn:bookIsbn
            }).then ((response) => {

                if(response.data.data.affectedRows === 0){
                    console.log("You already have that book on your wishlist.\n");
                    setMess3("You already have that book on your wishlist.");
                }else{
                    setMess3("Book sucesfully added to wishlist.");
                }
                console.log(response);
            });
        }
    }; 


    return (
        <div className="GeekText">
        <div className="createwish">
            <h1>Add to Wishlist</h1>
            <br></br>
            <p>Select a wishlist to add the book {bookName} </p>
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
            <p>{message}</p>
            <br></br>
            <button onClick={getWishNum}>Refresh</button>
            <br></br>
            <br></br>
            <label>Wishlist id</label>
            <input 
                type= "text" 
                onChange={(e) => {
                    setId(e.target.value);
                }}
            />
            <br></br>
            <button onClick={addItem}>Add</button> 
            <br></br>
            <p>{message3}</p>
            <br></br>
            <Button component={Link} to={`/currentwish/${username}`}>
                Return
            </Button>
        </div>
        </div>
    );

}
export default AddToWish;