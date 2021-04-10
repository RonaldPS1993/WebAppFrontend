import React from 'react';
import {NavLink} from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = props => (
    <header className="main-navigation">
        <div className="main-navigation__logo">
        <h1>GeekText</h1>
        </div>
        <nav className="main-navigation__items">
            <ul>
                <li>
                    <NavLink to="/auth">Login</NavLink>
                </li>
                    
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/account">Account</NavLink>
                </li>
                <li>
                    <NavLink to="/wishlist">Wishlist</NavLink>
                </li>
                <li>
                    <NavLink to="/Cart/CreateCart">Cart</NavLink>
                </li>
            </ul>
        </nav>
    </header>

);

export default mainNavigation;