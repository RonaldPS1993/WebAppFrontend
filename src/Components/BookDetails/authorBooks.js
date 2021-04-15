//Necessary Imports
import React, { Component } from 'react';
import axios from "axios";


//AuthorBooks displays to the user other Books by the author they clicked on
export default class authorBooks extends Component {
    constructor(){
        super();
        //Declaring states from the API
        this.state ={
            book_title: "",
            author_first_name: "",
            author_last_name: ""
        };
    }
    
    componentDidMount = () => {
        axios.get("").then(response =>{

            console.log(response)

            //Setting states
            this.setState({
                book_title: response.data.bookInfo[0].book_title,
                author_first_name : response.data.authorInfo[0].author_first_name,
                author_last_name : response.data.authorInfo[0].author_last_name
            })
        });
    };

    //Rendering output
    render() {
        return (
            <div>
              <h1>Books by: {this.state.author_first_name} {this.state.author_last_name}</h1>
              <hr></hr>
              <br></br>
              <h1>{this.state.book_title}</h1>
            </div>
        )
    }
}