import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class Rating extends Component {
    constructor(){
        super();
        this.state={
            book_isbn:"",
            book_title:"",
            total_rating:""
        }
    }

    componentDidMount = () => {
        axios.get("api/book_browsing/rating/2").then(response => {
            this.setState({
                book_isbn: response.data.book_isbn,
                book_title: response.data.book_title,
                total_rating: response.data.total_rating
            });
        });
    };

    render() {
        return (
            <div>
             <h2>      Books Rated    </h2>
             <h3>Book_ISBN: {this.state.book_isbn}</h3>
             <h3>Book_title: {this.state.book_title}</h3>
             <h3>Rating: {this.state.total_rating}</h3>
            </div>
        )
    }
}
export default Rating