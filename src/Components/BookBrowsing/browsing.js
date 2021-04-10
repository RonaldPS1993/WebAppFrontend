import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

class Browsing extends Component  {
    render()
   {
        return(
           <nav className="browsing-navigation__items">
           <ul>
               <li>
                   <NavLink to="/topsellers">Topsellers</NavLink>
               </li>
                   
               <li>
                   <NavLink to="/genre">Genre</NavLink>
                   
               </li>
               <li>
                   <NavLink to="/rating">Rating</NavLink>
               </li>
           </ul>
       </nav>
        );
    }
   }
   export default Browsing;