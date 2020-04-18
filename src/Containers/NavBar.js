import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class NavBar extends Component {
    render (){
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to= "/customers">
                             Customers 
                       </NavLink>
                    </li> 
                    <li>
                        <NavLink to= "/rentals">
                             Rentals
                       </NavLink>
                    </li> 
                    <li>
                        <NavLink to= "/movies">
                             Movies
                       </NavLink>
                    </li> 
                    <li>
                        <NavLink to= "/login">
                             Login
                       </NavLink>
                       
                    </li> 
                    <li>
                        <NavLink to= "/register">
                             Register
                       </NavLink>
                    </li> 
                </ul>
            </nav>
        )
    }

}

export default NavBar;
