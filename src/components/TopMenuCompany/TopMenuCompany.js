import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import './TopMenuCompany.css';


function TopMenu() {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <div className="nav-container">


                    <ul>
                        <li>
                            <NavLink to="/logged-in-homepage" exact activeClassName="active-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/logged-in-submissions" exact activeClassName="active-link">submissions</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active-link">Logout</NavLink>
                        </li>

                    </ul>

                </div>
            </nav>
        </header>
    );
}

export default TopMenu;