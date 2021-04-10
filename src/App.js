import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt, BrowserRouter, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Auth from './Components/Auth';
import SignUp from './Components/SignUp';
import AccountPage from './Components/Account';
import WishlistMenu from './Components/Wishlist/WishlistMenu';
import CreateWish from './Components/Wishlist/CreateWish';
import CurrentWishlist from './Components/Wishlist/CurrentWishlist';
import DisplayWish from './Components/Wishlist/DisplayWish';
import MainNavigation from "./Components/Navigation/MainNavigation";
import Header from './Components/Cart/Header';
import Main from './Components/Cart/Main';
import Basket from './Components/Cart/Basket';
import data from './Components/Cart/data';
import { useState } from 'react';
import CreateCart from "./Components/Cart/CreateCart";

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
              <Route path="/wishlist" exact component={WishlistMenu}/>
              <Route path="/wishlist/createwish" component={CreateWish}/>
              <Route path="/wishlist/currentwish" component={CurrentWishlist}/>
              <Route path="/wishlist/display/:cart_id/:customer_id" component={DisplayWish}/> 
              <Route path="/cart/CreateCart" component={CreateCart}/>
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