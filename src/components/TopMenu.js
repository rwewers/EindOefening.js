import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

function TopMenu() {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
        <nav>
            <div className="nav-container">


                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" activeClassName="active-link">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="demodrop" exact activeClassName="active-link">Demo drop</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                    </li>

                </ul>

            </div>
        </nav>
        </header>
    );
}

export default TopMenu;