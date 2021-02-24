import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";
import './SignUp.css';
import InputField from "../../../components/InputValidation/InputFieldValidation";

function SignUp() {

    const[createUserSucces, setCreateUserSucces] = useState(false);


    const inputRefs = React.useRef([
        React.createRef(), React.createRef(), React.createRef()
    ]);
    const[data, setData] = React.useState({});

    const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))

    }


    async function onSubmit(event) {
        event.preventDefault();
        // console.log(email, username, password);

        let isValid = true;

        for(let i = 0; i<inputRefs.current.length; i++ ){
            const valid =  inputRefs.current[i].current.validate()
            // console.log(valid);
            if(!valid){
                isValid= false

            }
        }
        if(!isValid){
            return;
        }

        if(isValid === true) {
            try {
                console.log(isValid);

                console.log(data);

                const response = await axios.post('http://localhost:8080/api/auth/signup', {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    role: ["USER"],

                })


                console.log(response.data);

                if (response.data.message === "User registered successfully!") {
                    setCreateUserSucces(true);

                }


            } catch (e) {
                console.log(e);
            }
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

                <InputField
                    ref={inputRefs.current[0]}
                    name="email"
                    label="Email *"
                    onChange ={handleChange}
                    validation={"required|email"}
                />
                <InputField
                    ref={inputRefs.current[1]}
                    name="username"
                    label="Username *"
                    onChange ={handleChange}
                    validation={"required|"}
                />

                <InputField
                    ref={inputRefs.current[2]}
                    name="password"
                    label="Password *"
                    onChange ={handleChange}
                    validation={"required"}
                />

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