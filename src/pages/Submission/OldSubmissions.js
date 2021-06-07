import React, { useEffect, useState } from 'react';
import "./OldSubmissions.css";
import axios from "axios";
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";
import SongLoader from "../../components/songLoader/SongLoader";
import {NavLink} from "react-router-dom";
import CommentViewer from "../../components/CommentViewer/CommentViewer";


function NewSubmissions(){

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
            } catch (error) {
                // TODO User error message
                setIsLoading(false)
                console.log(error)
            }
        }
    }, [])
    function displayDemos(user, demos) {
        console.log(demos);

        return demos.map(demo => (
            demo.comment != null ? (


                <li className="displayDemoContainer" key={demo.songTitle} >

                    <label>Uername: {user.username}</label>
                    <label> {demo.artist} + {demo.songTitle}</label>
                    <SongLoader
                        song={demo}
                    />
                    <CommentViewer
                        songId = {demo.id} />

                    <NavLink className="navLinks" to=
                        {`/viewSubmission?userId=${user.userId}&demoId=${demo.id}`} exact activeClassName="active-link"><button>View info</button></NavLink>
                </li>
            ):(
                <div>
                    <p>There are no old demos yet.</p>
                </div>
            )
        ))
    }
    function displayUser(user) {
        return user.demos.length > 0 && (
            <div className="ulContainer">
                {displayDemos(user, user.demos)}

            </div>

        )
    }



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
export default NewSubmissions;

