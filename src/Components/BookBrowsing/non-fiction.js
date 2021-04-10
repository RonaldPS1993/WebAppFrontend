import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class Non_fiction extends Component {
    constructor(){
        super();
        this.state={
            book_isbn:"",
            book_title:"",
            genre_name:""
        }
    }

    componentDidMount = () => {
        axios.get("api/book_browsing/non-fiction").then(response => {
            this.setState({
                book_isbn: response.data.book_isbn,
                book_title: response.data.book_title,
                genre_name: response.data.genre_name
            });
        });
    };

    render() {
        return (
            <div>
             <h2>      Non-fiction Books    </h2>
             <h3>Book_ISBN: {this.state.book_isbn}</h3>
             <h3>Book_title: {this.state.book_title}</h3>
             <h3>Genre: {this.state.genre_name}</h3>
            </div>
        )
    }
}
export default Non_fiction