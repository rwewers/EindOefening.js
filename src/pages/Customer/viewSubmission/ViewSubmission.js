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
                const userData = await axios.get(`http://localhost:8080/api/user/5`, {
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
        <>
            {isLoading}
            <TopMenuCustomer/>
            <ul>
                <li id="loadingError">
                    {demoData?.data && demoData.data.length > 0
                        ? demoData.data.map((song) => {

                                return <
                                    SongLoader
                                    className="test"
                                    song={song}
                                />
                            }
                        )
                        : "Loading..."}
                </li>
                <li>
                    {/*<label> name : {demoData.data.artist} -  {demoData.data.songTitle}</label>*/}
                </li>
            </ul>

        </>
    );

}
export default ViewSubmission;