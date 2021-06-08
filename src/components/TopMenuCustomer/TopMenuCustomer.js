import React, {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../logo.png';
import './TopMenuCustomer.css';
import { AuthContext, useAuthState } from '../../context/AuthContext';



function TopMenuCustomer() {
    const { logout } = useContext(AuthContext);
    const {isAuthenticated} = useAuthState();
    const {user} = useAuthState();

    let isAdmin = false;
    if(user){
        let length = user.roles.length;
        for (let i = 0; i < length; i++) {
            if(user.roles[i] === 'ROLE_ADMIN'){
                isAdmin = true;
            }
        }
    }
    function onSubmit(event){
        event.preventDefault();
            logout();
    }

    function whoLoggedIn(){
        if(isAuthenticated){
            if(isAdmin){
                return(
                    <ul>
                        <li>
                            <NavLink className="navLinks" to="/" exact activeClassName="active-link"><img src={logo1} className="App-logo2" alt="logo1" ></img></NavLink>
                        </li>
                        <li>
                            <NavLink className="navLinks" to="/newsubmissions" exact activeClassName="active-link">New </NavLink>
                        </li>
                        <li>
                            <NavLink className="navLinks" to="/oldsubmissions" exact activeClassName="active-link">old </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active-link" >
                                <span onClick={onSubmit}>Logout</span> </NavLink>
                        </li>
                    </ul>
                )
            }
            else{
                return(
                    <ul>
                        <li>
                            <NavLink className="navLinks" to="/" exact activeClassName="active-link"><img src={logo1} className="App-logo2" alt="logo1" ></img></NavLink>
                        </li>
                        <li>
                            <NavLink className="navLinks" to="demodrop" exact activeClassName="active-link">Demo drop</NavLink>
                        </li>
                        <li>
                            <NavLink className="navLinks" to="myDemos" exact activeClassName="active-link">My demo's</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active-link" >
                                <span onClick={onSubmit}>Logout</span> </NavLink>
                        </li>
                    </ul>
                )
            }
        }
        else{
            return(
                <ul>
                    <li>
                        <NavLink className="navLinks" to="/" exact activeClassName="active-link"><img src={logo1} className="App-logo2" alt="logo1" ></img></NavLink>
                    </li>
                    <li>
                        <NavLink className="navLinks" to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLinks" to="/about" activeClassName="active-link">About</NavLink>
                    </li>

                    <li>
                        <NavLink className="navLinks" to="/SignIn" activeClassName="active-link">Sign in</NavLink>
                    </li>
                </ul>
            )
        }
    }

    return (
        <div className="Topmenu-Container">
            <header className="homepageHeader">
                /header>
                <nav>
                    <div className="nav-container">
                        {whoLoggedIn()}
                    </div>
                </nav>
            </header>

        </div>
    );
}
export default TopMenuCustomer;