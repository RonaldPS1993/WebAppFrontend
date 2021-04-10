//Necessary Imports
import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

//BookInfo Page display's a given book's Information
export default class BookInfo extends Component {
    constructor(){
        super();
        //Declaring states from the API
        this.state ={
            book_title: "",
            book_isbn: "",
            publisher_id:"",
            book_isbn:"",
            bio: "",
            book_description: "",
            author_first_name: "",
            author_last_name: "",
            author_id: "",
            genre_name: "",
            total_rating: "",
            publisher_name: "",
            publisher_release_date: "",

        };
    }
    componentDidMount = () => {
        axios.get("").then(response =>{
            //Setting states
            console.log(response)
            this.setState({
                book_title: response.data.bookInfo[0].book_title,
                book_isbn: response.data.bookInfo[0].book_isbn,
                total_rating: response.data.bookInfo[0].total_rating,
                book_description: response.data.bookInfo[0].book_description,
                author_first_name : response.data.authorInfo[0].author_first_name,
                author_last_name : response.data.authorInfo[0].author_last_name,
                author_id : response.data.authorInfo[0].author_id,
                bio: response.data.bookInfo[0].bio,
                genre_name: response.data.genreInfo[0].genre_name,
                publisher_name: response.data.publishingInfo[0].publisher_name,
                publisher_release_date: response.data.publishingInfo[0].publisher_release_date,
                publisher_id: response.data.publishingInfo[0].publisher_id,
                
            })
        });
    };
  
  
    //Rendering output
    render() {
        return (
            <body>
                <div>
                <h1>{this.state.book_title} 
                <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={100} >
                    <TransformComponent>
                        <img  src={`/img/${this.state.publisher_id}.jpg`} 
                        width={200} 
                        />
                    </TransformComponent>
                </TransformWrapper>
                </h1>
                <h3> By:<Link to={`/bookdetails/authorBooks/${this.state.author_id}`}> {this.state.author_first_name} {this.state.author_last_name} </Link> </h3>
                <h3>Publisher: {this.state.publisher_name}</h3>
                <h3>Date Published: {this.state.publisher_release_date}</h3>
                <hr></hr>          
                <h3>Book Description: {this.state.book_description}</h3>
                <br></br>
                <h3>Author Bio: {this.state.bio}</h3>
                <br></br>
                <h3>Genre: {this.state.genre_name}</h3>
                <br></br><br></br>
                <h3>Book Isbn: {this.state.book_isbn}</h3>
                <h3>Book Rating: {this.state.total_rating}/5</h3>
                <h3>Customer Reviews and Comments</h3>
                <hr></hr>
                <br></br>
                <h3><Link to={`/wishlist/add/${this.state.book_isbn}/${this.state.book_title}/test808@email.com`}> Add to wishlist</Link> </h3>
            </div>
        </body>
        )
    }
}

