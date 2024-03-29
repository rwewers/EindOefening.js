import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import InputField from "../../components/inputValidation/InputFieldValidation";

import styles from './SignUp.module.css';


function SignUp() {

    const [createUserSucces, setCreateUserSucces] = useState(false);


    const inputRefs = React.useRef([
        React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(),
        React.createRef(), React.createRef(), React.createRef()
    ]);
    const [data, setData] = React.useState({});

    const handleChange = (name, value) => {
        setData(prev => ({...prev, [name]: value}))

    }


    async function onSubmit(event) {
        event.preventDefault();
      

        let isValid = true;


        for (let i = 0; i < inputRefs.current.length; i++) {
            const valid = inputRefs.current[i].current.validate()
            // console.log(valid);
            if (!valid) {
                isValid = false

            }
        }
        if (!isValid) {
            return;
        }

        if (isValid === true) {
            try {


                const response = await axios.post('http://localhost:8080/api/auth/signup', {
                    username: data.username,
                    first_name: data.firstName,
                    last_name: data.lastName,
                    email: data.email,
                    country: data.country,
                    facebook: data.facebook,
                    instagram: data.instagram,
                    password: data.password,
                    role: ["USER"],

                })


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
            <div>
                <NavigationBar/>
                <div className={styles['signupContainer']}>

                </div>
                {createUserSucces === true && (
                    <h2 className={styles['messageSucces']}>You did it !! Click <Link
                        className={styles['signUpSuccesHere']} to="/SignIn">here</Link> to sign in.</h2>
                )}
                <form className={styles['signupForm']} onSubmit={onSubmit}>

                    <InputField
                        ref={inputRefs.current[0]}
                        className={styles['signUpInput']}
                        name="username"
                        label="Username"
                        onChange={handleChange}
                        validation={"required"}
                    />
                    <InputField
                        ref={inputRefs.current[1]}
                        className={styles['signUpInput']}
                        name="firstName"
                        label="Firstname"
                        onChange={handleChange}
                        validation={"required|"}
                    />

                    <InputField
                        ref={inputRefs.current[2]}
                        className={styles['signUpInput']}
                        name="lastName"
                        label="Lastname"
                        onChange={handleChange}
                        validation={"required"}
                    />
                    <InputField
                        ref={inputRefs.current[3]}
                        className={styles['signUpInput']}
                        name="email"
                        label="Email"
                        onChange={handleChange}
                        validation={"required|email"}
                    />
                    <InputField
                        ref={inputRefs.current[4]}
                        className={styles['signUpInput']}
                        name="country"
                        label="Country"
                        onChange={handleChange}
                        validation={"required"}
                    />
                    <InputField
                        ref={inputRefs.current[5]}
                        className={styles['signUpInput']}
                        name="facebook"
                        label="Facebook"
                        onChange={handleChange}
                        validation={"required"}
                    />
                    <InputField
                        ref={inputRefs.current[6]}
                        className={styles['signUpInput']}
                        name="instagram"
                        label="Instagram"
                        onChange={handleChange}
                        validation={"required"}
                    />
                    <InputField
                        ref={inputRefs.current[7]}
                        className={styles['signUpInput']}
                        name="password"
                        label="Password"
                        type="password"
                        onChange={handleChange}
                        validation={"password1|required|password"}
                    />
                    <InputField
                        ref={inputRefs.current[8]}
                        className={styles['signUpInput']}
                        name="passwordRepeat"
                        label="Password repeat"
                        type="password"
                        onChange={handleChange}
                        validation={"password2|required|passwordRepeat|password"}
                    />

                    <button
                        type="submit"
                        className={styles['signUpButton']}
                    >
                        SIGN UP
                    </button>
                    <p className={styles['alreadyHaveAnAccount']}>Already have an account? You can sign in <Link
                        className={styles['alreadyHaveAnAccountHere']} to="/SignIn">here</Link> !</p>
                </form>

            </div>
        </>
    );
}

export default SignUp;
