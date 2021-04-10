import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class Rating extends React.Component {
    state = {
        books: []
    }

    async componentDidMount() {
        const url = "http://localhost:3001/api/book_browsing/rating/2";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({books: data.data});
    }

    render() {
        return (
          <div>
          <h2>      Rated Books    </h2>
            {this.state.books.map(book => (
                <div>
                <h3>Book_ISBN: {book.book_isbn}</h3>
                <h3>Book_title: {book.book_title}</h3>
                <h3>Rating: {book.total_rating}</h3>
                <br></br>
                </div>
            ))}
          </div>
        )
    }
}
export default Rating