import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt, BrowserRouter, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Auth from './Components/Auth';
import SignUp from './Components/SignUp';
import AccountPage from './Components/Account';
import MainNavigation from "./Components/Navigation/MainNavigation";
import BookInfo from "./Components/BookDetails/BookInfo";
import authorBooks from "./Components/BookDetails/authorBooks";



class App extends Component {
render() {
    return (
        <BrowserRouter>
        <React.Fragment>
        <MainNavigation />
        <main className="main-content">
        <Switch>
            <Redirect from="/" to="/auth" exact/>
            <Route path="/auth" component={Auth}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/account" component={AccountPage}/>
            <Route path="/bookdetails/bookInfo/" component={BookInfo}/>
            <Route path="/bookdetails/authorBooks/" component={authorBooks}/>
            </Switch>
            </main>
       

        <Switch>
            
        </Switch>
        </React.Fragment>
        </BrowserRouter>
    );
}
}

export default App;