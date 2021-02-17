import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import './TopMenuCompany.css';
import logo1 from "../../logo.png";


function TopMenu() {

    return (
        <header>

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
                            <img src={logo1} className="App-logo2" alt="logo1" />
                        </li>
                        <li>
                            <NavLink to="/logged-in-accounts" exact activeClassName="active-link">Accounts      </NavLink>
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