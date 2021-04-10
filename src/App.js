import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import BoardUser from "./Components/BoardUser";
import Account from "./Components/Account";
import BookInfo from "./Components/BookDetails/BookInfo";
import authorBooks from "./Components/BookDetails/authorBooks";
import Browsing from "./Components/BookBrowsing/browsing"
import Topsellers from "./Components/BookBrowsing/topsellers"
import Genre from "./Components/BookBrowsing/genre"
import Rating from "./Components/BookBrowsing/rating"
import Non_fiction from "./Components/BookBrowsing/non-fiction"
import Fiction from "./Components/BookBrowsing/fiction"
import WishlistMenu from './Components/Wishlist/WishlistMenu';
import CreateWish from './Components/Wishlist/CreateWish';
import CurrentWishlist from './Components/Wishlist/CurrentWishlist';
import DisplayWish from './Components/Wishlist/DisplayWish';
import AddToWish from './Components/Wishlist/AddToWish';
import Change from './Components/Wishlist/Change';


const App = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);

    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          GeekText
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.customer_id}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/account"} className="nav-link">
                Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/wishlist/test808@email.com`} className="nav-link">
                Wishlist
              </Link>
            </li>

          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/account" component={Account} />
          <Route exact path={"/browsing"} component={Browsing}/>
          <Route exact path={"/topsellers"} component={Topsellers}/>
          <Route exact path={"/genre"} component={Genre}/>
          <Route exact path={"/rating"} component={Rating}/>
          <Route exact path={"/fiction"} component={Fiction}/>
          <Route exact path={"/non-fiction"} component={Non_fiction}/>
          <Route path="/user" component={BoardUser} />
          <Route path="/bookdetails/bookInfo/" component={BookInfo}/>
          <Route path="/bookdetails/authorBooks/" component={authorBooks}/>
          <Route path="/wishlist/:customer_id" exact component={WishlistMenu}/>
          <Route path="/createwish/:customer_id" component={CreateWish}/>
          <Route path="/currentwish/:customer_id" component={CurrentWishlist}/>
          <Route path="/wishlist/display/:cart_id/:customer_id" component={DisplayWish}/> 
          <Route path="/wishlist/add/:book_isbn/:book_title/:customer_id" component={AddToWish}/> 
          <Route path="/wishlist/change/:book_count_id/:customer_id" component={Change}/> 
        </Switch>
      </div>
    </div>
  );
};

export default App;