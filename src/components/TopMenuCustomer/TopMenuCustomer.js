import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../logo.png';
import './TopMenuCustomer.css';



function TopMenuCustomer() {
    return (
        <div className="Topmenu-Container">
        <header>
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
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
                        <img src={logo1} className="App-logo2" alt="logo1" />
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
        </div>
    );
}

export default TopMenuCustomer;