import React, {useState, useContext, useEffect} from 'react';
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import {AuthContext, useAuthState} from '../../Context/AuthContext';
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import backgroundPicture from "../../../src/assets/pictures/home_background.jpg"

import styles from './SignIn.module.css';

function SignIn() {

    const {login} = useContext(AuthContext);
    const {isAuthenticated} = useAuthState();


    const history = useHistory();

    useEffect(() => {

        if (isAuthenticated === true) {

            history.push('/');

        }
        // eslint-disable-next-line
    }, [isAuthenticated]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmit(event) {
        event.preventDefault();


        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                username: username,
                password: password,
            })


            login(response.data);


        } catch (e) {
            console.log(e);
            alert("Bad Credentials");
        }
    }


    return (

        <div>
            <NavigationBar/>


            <div className={styles['signInContainer']}>
                <img src={backgroundPicture} className={styles['signInBackground']} alt="logo"/>
            </div>
            <form className={styles['loginForm']} onSubmit={onSubmit}>
                <div className={styles['signInWrapper']}>
                    <label className={styles['labelSignIn']} htmlFor="username-field">
                        Username :
                        <input
                            type="text"
                            className={styles['username-field']}

                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div className={styles['signInWrapper']}>
                    <label className={styles['labelSignin']} htmlFor="password-field">
                        Password :
                        <input
                            type="password"
                            className={styles['password-field']}

                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </label>
                </div>
                <button
                    type="submit"
                    className={styles['loginButton']}
                >
                    Sign in
                </button>
                <div className={styles['accountCreate']}>
                    <p className={styles['createMessage']}>Don't have an account yet? You can create an account <Link
                        className={styles['linkToSignUp']} to="/SignUp">here</Link> !</p>
                </div>
            </form>


        </div>


    );

}

export default SignIn;