import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

class Genre extends Component  {
    render()
   {
        return(
           <nav className="genre-navigation__items">
           <ul>
               <li>
                   <NavLink to="/fiction">Fiction</NavLink>
               </li>
                   
               <li>
                   <NavLink to="/non-fiction">Non-Fiction</NavLink>
               </li>
           </ul>
       </nav>
        );
    }
   }
   export default Genre;