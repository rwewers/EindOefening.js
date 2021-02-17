import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";
import './SignUp.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('')

    const[createUserSucces, setCreateUserSucces] = useState(false);

    async function onSubmit(event) {
        event.preventDefault();
        console.log(email, username, password);


        try{
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                username: username,
                email: email,
                password: password,
                role: ["USER"],
            })
            console.log(response.data);

            if(response.data.message === "User registered successfully!"){
                setCreateUserSucces(true);

            }

        } catch (e){
            console.log(e);
        }
    }

    return (
        <>
            <div className="signupContainer">
                <TopMenuCustomer />

            <h1>Registreren</h1>
                {createUserSucces === true &&(
            <h2 className="message-succes">Het is gelukt! Klik <Link to="/SignIn">hier</Link> om je in te loggen.</h2>
            )}
            <form className="signupForm" onSubmit={onSubmit}>
                <label htmlFor="email-field">
                    Email:
                    <input
                        type="email"
                        id="email-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button
                    type="submit"
                    className="form-button"
                >
                    Maak account aan
                </button>
                <p>Heb je al een account? Je kunt je <Link to="/SignIn">hier</Link> inloggen.</p>
            </form>

            </div>
            </>
    );
}

export default SignUp;