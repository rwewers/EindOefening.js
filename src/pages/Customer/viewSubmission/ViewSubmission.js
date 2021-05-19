import React, { useEffect, useState } from 'react';
import "./ViewSubmission.css";
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";
import {useAuthState} from "../../../context/AuthContext";
import axios from "axios";
import SongLoader from "../../../components/songLoader/SongLoader";

function ViewSubmission(){

    const [userData, setUserData] = useState();
    const [demoData, setDemoData] = useState();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchData()
//              TODO PAGINA REFRESHEN LOGT UIT!!!
        async function fetchData() {
            setIsLoading(true)

            try {
                const userData = await axios.get(`http://localhost:8080/api/user/4`, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                })
                const demoResponse = await axios.get(`http://localhost:8080/api/demos/2`, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                })
                setUserData(userData);
                setDemoData(demoResponse);
                setIsLoading(false)
            } catch (error) {
                // TODO User error message
                setIsLoading(false)
                console.log(error)
            }
        };
    }, [])
    console.log(userData);
    console.log(demoData);

    return(
            !isLoading && demoData ?
                    (
                        <>
                            <TopMenuCustomer/>
                            <div className="containerViewSubmission">
                            <h1>{demoData.data.artist} + {demoData.data.songTitle}</h1>


                                <ul className="listViewSubmission">

                                    <li>
                                        Firstname: {userData.data.firstName}
                                    </li>
                                    <li>
                                        Lastname: {userData.data.lastName}
                                    </li>
                                    <li>
                                        Email: {userData.data.email}
                                    </li>
                                    <li>
                                        Country: {userData.data.country}
                                    </li>
                                    <li>
                                        Facebook: {userData.data.facebook}
                                    </li>
                                    <li>
                                        Instagram: {userData.data.instagram}
                                    </li>
                                    <linm>
                                        <SongLoader
                                            className="test"
                                            song={demoData.data}
                                        />
                                    </linm>
                                </ul>


                            </div>

                         </>
                    ) : (
                    <div>
                        <TopMenuCustomer/>
                            <h1>test2</h1>
                    </div>
                    )


    );

}
export default ViewSubmission;