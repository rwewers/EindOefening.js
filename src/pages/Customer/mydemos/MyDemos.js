import React, { useEffect, useState, useContext} from 'react';
import { useAuthState} from '../../../context/AuthContext';
import './MyDemos.css';
import axios from "axios";
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";


function Mydemos() {

    const { user } = useAuthState()
    const [songs, setSongs] = useState()

    useEffect(() => {


        fetchData()


//              TODO PAGINA REFRESHEN LOGT UIT!!!

        async function fetchData() {

            try {
                const {data} = await axios.get(`http://localhost:8080/api/user/${user.userId}/demos`,  {

                    headers: {
                        'Authorization':  localStorage.getItem('token')
                    }});

                console.log(data);
                setSongs(data)

            } catch (error) {
                // TODO User error message
                console.log(error)
            }
        }


    }, [user])

    return (
        <>
            <TopMenuCustomer/>
        </>


    );
}

export default Mydemos;