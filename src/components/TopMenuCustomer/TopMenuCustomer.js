import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../logo.png';
import './TopMenuCustomer.css';
import { AuthContext, useAuthState } from '../../context/AuthContext';



function TopMenuCustomer() {
    const { logout } = useContext(AuthContext);
    const {isAuthenticated} = useAuthState();

    function onSubmit(event){
        event.preventDefault();


            logout();




    }
    return (
        <div className="Topmenu-Container">

      <nav>
            <div className="nav-container">

                {isAuthenticated ? (
                    <ul>
                        <li>
                            <NavLink className="navLinks" to="/" exact activeClassName="active-link">Home</NavLink>
                        </li>

                        <li>
                            <NavLink className="navLinks" to="/about" activeClassName="active-link">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="navLinks" to="/contact" exact activeClassName="active-link">Contact</NavLink>
                        </li>
                        <li>
                            <img src={logo1} className="App-logo2" alt="logo1" />
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
                ) : (
                    <ul>
                        <li>
                            <NavLink className="navLinks" to="/" exact activeClassName="active-link">Home</NavLink>
                        </li>

                        <li>
                            <NavLink className="navLinks" to="/about" activeClassName="active-link">About</NavLink>
                        </li>
                        <li>
                            <img src={logo1} className="App-logo2" alt="logo1" />
                        </li>
                        <li>
                            <NavLink className="navLinks" to="/contact" exact activeClassName="active-link">Contact</NavLink>
                        </li>

                        <li>
                            <NavLink className="navLinks" to="/SignIn" activeClassName="active-link">Sign in</NavLink>
                        </li>


                    </ul>
                )}


            </div>
        </nav>

        </div>
    );
}

export default TopMenuCustomer;