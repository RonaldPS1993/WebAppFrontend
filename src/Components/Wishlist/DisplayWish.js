import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import * as ReactBootStrap from "react-bootstrap";
import Axios from "axios";

function DisplayWish({match}) {
  
    useEffect(() => {
        fetchWish();
    },[]);

    //create states
    const[username, setUsernameReg] = useState(match.params.customer_id);
    const[wishId, setId] = useState(match.params.cart_id);

    const[message, setMess] = useState('');
    const[wishobj,setWishlists] = useState([]);

    const[objtodelete,setobj] = useState(0);
    const[message2, setMess2] = useState('');

    const[objAdd,setobj2] = useState('');
    const[message3, setMess3] = useState('');

    const fetchWish = async () => {
        const fetchWish = await fetch(`http://localhost:3001/api/wishlist/getwish/${match.params.cart_id}`); 
        const wishlist = await fetchWish.json();
        setWishlists(Object.entries(wishlist)[1][1]);
        if(wishobj.length == 0){
            setMess("Your wishlist is empty, or re push the button");
        }else{
            setMess('');
        }
        console.log(wishlist);
        console.log(wishobj);
        console.log(match);
        console.log(username);
    }

    const renderWishlist = (wishlists,index) => {
        return (
            <tr key={index}>
                <td>{wishlists.book_title}</td>
                <td>{wishlists.book_count_id}</td>
                <td>{wishlists.cart_id}</td>
            </tr>
            
        )
    }


    const  addItem= () => {
        console.log(objAdd);
        console.log(wishId);
        Axios.post('http://localhost:3001/api/wishlist/addtowish',{
            cart_id:wishId,
            book_isbn:objAdd
    }).then ((response) => {

        if(response.data.data.affectedRows === 0){
            console.log("You already have that book on your wishlist.\n");
            setMess3("You already have that book on your wishlist.");
        }else{
            setMess3("Book sucesfully added to wishlist. Please push refresh.");
        }
        console.log(response);
    });
    };

    const  deleteItem= () => {
        console.log(objtodelete);
        Axios.delete('http://localhost:3001/api/wishlist/deleteitem', {data:{
            book_count_id:objtodelete
    }}).then ((response) => {
        if(response.data.data.affectedRows === 0){
            console.log("That book count id is invalid\n");
            setMess2("That book count id is invalid.");
        }else{
            setMess2("Book sucesfully removed. Please push refresh.");
        }
        console.log(response);
    });
    };

    return (
        <div className="GeekText">
        <div className="createwish">
            <h1>This wishlist has...</h1>
            <br></br>
            <br></br>
            <button onClick={fetchWish}>Refresh</button>
            <br></br>
            <p>{message}</p>
            <br></br>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Book name</th>
                        <th>Book count id</th>
                        <th>Cart id</th>
                    </tr>
                </thead>
                <tbody>
                    {wishobj.map(renderWishlist)}
                </tbody>
            </ReactBootStrap.Table>
            <br></br>
            <br></br>
            <p>If you want to delete an object from this wishlist, please provide the book count id, and push delete.</p>
            <label>Book count id</label>
            <input 
                type= "text" 
                onChange={(e) => {
                    setobj(e.target.value);
                }}
            />
            <br></br>
            <button onClick={deleteItem}>Delete</button>
            <br></br>
            <p>{message2}</p>
            <br></br>
            <br></br>
            <p>If you want to add an object from this wishlist, please provide the book isbn, and push add.</p>
            <label>Book isbn</label>
            <input 
                type= "text" 
                onChange={(e) => {
                    setobj2(e.target.value);
                }}
            />
            <br></br>
            <button onClick={addItem}>Add</button>
            <br></br>
            <p>{message3}</p>
            <br></br>
            <Button component={Link} to="/wishlist">
                Return
            </Button>
        </div>
        </div>
    );

}
export default DisplayWish;