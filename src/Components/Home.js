import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import "./Home.css";



class Home extends Component  {
 render()
{
     return(
        <nav className="home-navigation__items">
        <ul>
        <li>
        
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
                
            <li>
                <NavLink to="/Register">Sign Up</NavLink>
                
            </li>
            <li>
                <NavLink to="/account">Account</NavLink>
            </li>
            <li>
                <NavLink to="/browsing">Browsing</NavLink>
            </li>
        </ul>
    </nav>
     );
 }
}
export default Home;