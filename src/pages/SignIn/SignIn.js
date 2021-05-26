import React, {useState, useContext, useEffect} from 'react';
import './SignIn.css';
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import { AuthContext, useAuthState } from '../../context/AuthContext';
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";


function SignIn() {

    const { login } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();
    const {user} = useAuthState();


    const history = useHistory();

    useEffect( ()=> {
        if(isAuthenticated === true ){

                history.push('/');

        }
    }, [isAuthenticated]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmit(event) {
        event.preventDefault();

        console.log(user);
        try{
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                username: username,
                password: password,
            })




            login(response.data);


            console.log(response);
        } catch (e){
            console.log(e);
        }
    }




        return (

                <div>
                <TopMenuCustomer />

                <form className="loginForm" onSubmit={onSubmit}>
                    <label id="labelSignin" htmlFor="username-field">
                        Username :
                        <input
                            type="text"
                            id="username-field"
                            placeholder="nick"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>

                    <label id="labelSignin" htmlFor="password-field">
                        Password :
                        <input
                            type="password"
                            id="password-field"
                            placeholder="nicknick"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button
                        type="submit"
                        className="form-button"
                    >
                        Inloggen
                    </button>
                    <p>Don't have an account yet? You can create an account <Link to="/SignUp">here</Link> !</p>
                </form>
                </div>


        );

}

export default SignIn;