import React, { useEffect, useState } from 'react';
import "./Submissions.css";
import axios from "axios";
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";
import SongLoader from "../../../components/songLoader/SongLoader";

function Submissions(){

    const [allUsers, setAllUsers] = useState()
    const [hasDemos, setHasDemos] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        fetchData()
//              TODO PAGINA REFRESHEN LOGT UIT!!!

        async function fetchData() {
            setIsLoading(true)
            try {
                const response = await axios.get(`http://localhost:8080/api/user/`, {

                    headers: {
                        'Authorization': localStorage.getItem('token')

                    }


                })


                setAllUsers(response);
                console.log(response);
                setIsLoading(false)
                console.log(allUsers);

                for (let i = 0; i <response.data.length ; i++) {
                    if(response.data[i].demos.length > 0){
                        setHasDemos(true);
                    }
                }

                // response.forEach(user => {
                //     if (user.demos.length > 0) {
                //         setHasDemos(true)
                //     }
                // })

            } catch (error) {
                // TODO User error message
                setIsLoading(false)
                console.log(error)
            }
        }
         }, [])


    // if(isLoading === false){
    //     console.log(data);
    // }

    console.log(allUsers);

    function displayDemos(demos) {

        return demos.map(demo => (

            <li key={demo.songTitle} >
                <SongLoader
                    song={demo}

                />
            </li>
        ))
    }

    function displayUser(user) {
        return user.demos.length > 0 && (
            <ul key={`user${user.userId}`}>
                <li
                    key={user.userId}
                    className="userID">
                    <strong>User: </strong>{user.username}
                </li>
                {displayDemos(user.demos)}
            </ul>
        )
    }


       // console.log(allUsers);




    return(
        <>
            <TopMenuCustomer/>
            {isLoading}
            <div className='demo-list'>
                {!hasDemos && <ul><li key="no-demos">No demos yet...</li></ul>}
                {allUsers?.data && allUsers.data.map(user => (
                    displayUser(user)
                ))}
            </div>
        </>
    )
}
export default Submissions;

