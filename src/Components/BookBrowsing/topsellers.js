import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class Topsellers extends Component {
    constructor(){
        super();
        this.state={
            book_isbn:[],
            book_title:[]
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:3001/api/book_browsing/topsellers").then(response => {
            console.log(response);
            this.setState({
                book_isbn: response.data.data.book_isbn,
                book_title: response.data.data.book_title
            })
        });
    };

    render() {
        return (
            <div>
             <h2>Top Seller Books</h2>
             <h3>Book_ISBN: {this.state.book_isbn}</h3>
             <h3>Book_title: {this.state.book_title}</h3>
            </div>
        )
    }
}
export default Topsellers