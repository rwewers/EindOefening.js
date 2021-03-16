import React, { useEffect, useState, useContext} from 'react';
import { useAuthState} from '../../../context/AuthContext';
import './MyDemos.css';
import axios from "axios";
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";
import SongLoader from "../../../components/songLoader/SongLoader";
const songs= [];
import './MyDemos.css';

function Mydemos() {

    let data = {};

    const {user} = useAuthState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        fetchData()

        async function fetchData() {
            setIsLoading(true)

            try {
                data = await axios.get(`http://localhost:8080/api/user/${user.userId}/demos`, {

                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                });
                setIsLoading(false)
            } catch (error) {
                // TODO User error message
                setIsLoading(false)
                console.log(error)
            }
            console.log(data);
        };
    }, [user])

    if(isLoading === false){
        console.log(data);
    }

    return (
        <>
            {isLoading}
            <TopMenuCustomer/>
            {/*<button onClick={showData}>*/}
            {/*</button>*/}
            <ul>
                <li id="loadingError">
                    {data && data.length > 0
                        ? data.map((song) => {

                                return <SongLoader
                                    className="test"
                                    song={song}
                                />
                            }
                        )
                        : "Loading..."}
                </li>
            </ul>
        </>

    );
}
export default Mydemos;