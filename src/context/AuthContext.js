import React, {createContext, useContext, useEffect, useState} from 'react';
import {setLocalUser} from "../components/localStorage/localStorage"
import {useHistory} from "react-router-dom";


const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [authState, setAuthState] = useState({
        status: 'pending',
        error: null,
        user: null,
    })
    const history = useHistory();

    useEffect(() => {


        setTimeout(() => {

            setAuthState({
                ...authState,
                status: 'done',
            })
        }, 2000)
        // eslint-disable-next-line
    }, []);

    function login(data) {
        const newUser = {}
        newUser.userId = data.id
        newUser.username = data.username
        newUser.accessToken = 'Bearer ' + data.accessToken
        newUser.roles = data.roles
        localStorage.setItem('token', newUser.accessToken);
        localStorage.setItem('id', newUser.userId);
        localStorage.setItem('role', newUser.roles);
        localStorage.setItem('username', newUser.username);

        setLocalUser(newUser)

        setAuthState({
            ...authState,
            user: {
                username: data.username,
                email: data.email,
                roles: data.roles,
                userId: data.id,
            }
        })
    }

    function logout() {
        localStorage.clear();
        setAuthState({
            ...authState,
            user: null,
        })

        history.push('/signin');

    }

    const providorData = {
        ...authState,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={providorData}>
            {/*Hebben we alles gecheckt? Laat dan de applicatie zien*/}
            {authState.status === 'done' && children}
            {/*Zijn we nog bezig met verifieren? Dan gaan we ook de applicatie niet laden!*/}
            {authState.status === 'pending' && <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

function useAuthState() {

    const authState = useContext(AuthContext);
    const isDone = authState.status === 'done';
    const isAuthenticated = authState.user !== null && isDone;
    return {
        ...authState,
        isAuthenticated: isAuthenticated,
    }
}

export {
    AuthContext,
    useAuthState,
    AuthContextProvider,
}


