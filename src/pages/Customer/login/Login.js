import React from 'react';
import './Login.css';
import InputField from "../../../components/InputValidation/InputFieldValidation";


function Login() {

    const inputRefs = React.useRef([
        React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()
    ]);
    const[data, setData] = React.useState({});

    const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
    }

    console.log(data);
    // console.log(inputRefs);

    const submitForm = (e) => {
        e.preventDefault();

        let isValid = true;

        for (let i = 0; i < inputRefs.current.length; i++) {
            const valid = inputRefs.current[i].current.validate()
            console.log(valid);
            if (!valid) {
                isValid = false
            }
        }
        if (!isValid) {
            return;
        }
    }

        return (
            <div className="loginFormContainer">
                <form className="loginForm">
                    <h1 id="Login">LOGIN</h1>
                    <InputField
                        ref={inputRefs.current[0]}
                        name="username"
                        label="Username *"
                        onChange={handleChange}
                    />
                    <InputField
                        ref={inputRefs.current[1]}
                        name="password"
                        label="Password *"
                        onChange={handleChange}
                       />
                    <button id="loginButton" type="submit" >
                        Login
                    </button>
                </form>

            </div>

        );

}

export default Login;