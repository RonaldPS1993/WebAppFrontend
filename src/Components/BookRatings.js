//
//This component will allow to send the comments for a book
//
import React, { Component } from 'react';
import axios from 'axios';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';
import { Checkbox } from '@material-ui/core';


class BookRatings extends Component {
    constructor() {
        super();
        this.state = { value: 'Please write a review' , 
                      checked : false };
    }

  
    handleChange = (event) =>  {
        this.setState( { value : event.target.value});
        
    }
    handleCheckboxChange = (event) =>  {
        this.setState( { checked : event.target.checked });
        
    }
    

    handleSubmit = (event) => { 

        sendReviews(this.state.value, this.props.isbn, document.getElementById('stars').value, this.state.checked);
        window.location.href = "http://localhost:3000/bookdetails/bookinfo";

        event.preventDefault();
    }


    render() { 
        return (
           
           <div>

      
            <label><span >Rate this book:   </span>
             <select name="stars" id="stars">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </label>
            <hr />
            
            <label><span>Check to post anonymously:</span>
            <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
            />
            </label>
            <hr />
                <form onSubmit={this.handleSubmit} >  
        
                    <textarea  value={this.state.value} onChange={this.handleChange}   rows="2" cols="100">
                    </textarea>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
               </form>
           </div>
         );
    }

}

function sendReviews(texto, isbn, rating, anon) {
   let myUrl = 'http://localhost:3001/api/reviews/'+ isbn+ '/'+ texto + '/' +  rating + '/';

   if (anon === false)
        myUrl = myUrl + 0;
   else
        myUrl = myUrl + 1;

    axios.post(myUrl).then(response => {
                return ;

    },(error) => {
        document.write("error");
    });

   console.log('ahora el get avg'); 
   myUrl = 'http://localhost:300/api/reviews/' + isbn;    //Esto para traer el average. A ver si funciona...

    axios.get(myUrl).then(response => {
        return ;

    },(error) => {
        document.write("error");
    })

    console.log('response del avg: , response');


   
}
 


export default BookRatings;