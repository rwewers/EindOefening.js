import React, {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../logo.png';
import { AuthContext, useAuthState } from '../../Context/AuthContext';

import styles from './NavigationBar.module.css';


function NavigationBar() {
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
                            <NavLink className="navLinks" to="/" exact activeClassName="active-link"><img src={logo1} className={styles['navigationBarLogo']} alt="logo1" ></img></NavLink>
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
                            <NavLink className="navLinks" to="/" exact activeClassName="active-link"><img src={logo1} className={styles['navigationBarLogo']} alt="logo1" ></img></NavLink>
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
                        <NavLink className="navLinks" to="/" exact activeClassName="active-link"><img src={logo1} className={styles['navigationBarLogo']} alt="logo1" ></img></NavLink>
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
        <div className={styles['navigationBarContainer']}>
            <header className={styles['homepageHeader']}>
                /header>
                <nav>
                    <div className={styles['nav-container']}>
                        {whoLoggedIn()}
                    </div>
                </nav>
            </header>

        </div>
    );
}
export default NavigationBar;