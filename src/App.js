import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt, BrowserRouter, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Auth from './Components/Auth';
import SignUp from './Components/SignUp';
import AccountPage from './Components/Account';
import Wishlist from './Components/Wishlist';
import MainNavigation from "./Components/Navigation/MainNavigation";



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
            <Route path="/wishlist" component={Wishlist}/>
            <Route path="/account" component={AccountPage}/>
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