import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import * as ReactBootStrap from "react-bootstrap";
import Axios from "axios";


function DisplayWish({match}) {
  
    useEffect(() => {
        fetchWish();
        fetchNumber();
    },[]);

    //create states
    const[username, setUsernameReg] = useState(match.params.customer_id);
    const[wishId, setId] = useState(match.params.cart_id);

    const[message, setMess] = useState('');
    const[wishobj,setWishlists] = useState([]);

    const[objtodelete,setobj] = useState(0);
    const[message2, setMess2] = useState('');

    const[FinalNum,setnum] = useState(0);

    const[message3, setMess3] = useState('');

    const[objToChange,setobj2] = useState(0);

        
    const fetchNumber = async () => {
        const fetchNum = await fetch(`http://localhost:3001/api/wishlist/getcount/${match.params.customer_id}`); 
        const Num = await fetchNum.json();
        setnum(Num.data[0].wish_count);
        console.log("Num =");
        console.log(Num);
        console.log("final num =");
        console.log(FinalNum);
        
        if(FinalNum<2){
            setMess3("You must have at least 2 wishlist to change items between them");
        }else{
            setMess3("Provide the book count id of the item that you want to change.");
        }
    }

    

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
        fetchNumber();
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
            <p>{message3}</p>
            <br></br>
            <p>If you want to change an item to another wishlist, provide the book_count_id. And click change.</p>
            <label>Book count id</label>
            <input 
                type= "text" 
                onChange={(e) => {
                    setobj2(e.target.value);
                }}
            />
            <br></br>
            <Button component={Link} to= {`/wishlist/change/${objToChange}/${username}`} >
                Change
            </Button>
            <br></br>
            <Button component={Link} to= "/wishlist">
                Return
            </Button>
        </div>
        </div>
    );

}
export default DisplayWish;