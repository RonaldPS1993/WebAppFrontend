import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class Non_fiction extends React.Component {
    state = {
        books: []
    }

    async componentDidMount() {
        const url = "http://localhost:3001/api/book_browsing/non-fiction";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({books: data.data});
    }

    render() {
        return (
          <div>
          <h2>      Non-Fiction Books    </h2>
            {this.state.books.map(book => (
                <div>
                <h3>Book_ISBN: {book.book_isbn}</h3>
                <h3>Book_title: {book.book_title}</h3>
                <h3>Genre: {book.genre_name}</h3>
                <br></br>
                </div>
            ))}
          </div>
        )
    }
}
export default Non_fiction