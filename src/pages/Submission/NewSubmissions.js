import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SongLoader from "../../components/songLoader/SongLoader";
import {NavLink} from "react-router-dom";
import CommentViewer from "../../components/CommentViewer/CommentViewer";

import styles from "./Submissions.module.css";



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

               let {data} = response;
                data.forEach(user => {
                    if (user.demos.length > 0) {
                        for (let i = 0; i < user.demos.length; i++) {
                            if(user.demos[i].comment == null){
                                setHasDemos(true);
                            }
                            else{
                                setHasDemos(false);
                            }
                        }
                    }
                })

                setAllUsers(response);
                setIsLoading(false)


            } catch (error) {
                // TODO User error message
                setIsLoading(false)
                console.log(error)
            }
        }
         }, [])
    function displayDemos(user, demos) {
        return demos.map(demo => (
            demo.comment == null ?(


            <li className={styles['displayDemoContainer']} key={demo.songTitle} >

                <label>{user.username}</label>
                <label>{user.firstName} {user.lastName}</label>
                <label> {demo.artist} - {demo.songTitle}</label>
                <SongLoader
                    song={demo}
                />
                <CommentViewer
                    songId = {demo.id} />

                <NavLink className="navLinks" to=
                    {`/viewSubmission?userId=${user.userId}&demoId=${demo.id}`} exact activeClassName="active-link"><button className={styles['writeACommentbutton']}>Write a comment</button></NavLink>
            </li>
            ):(
                <div>
                    <p></p>
                </div>
                )
        ))
    }
    function displayUser(user) {
            if(user.demos.length > 0){
                return(
                    <div>
                        {displayDemos(user, user.demos)}

                    </div>
                )
            }
    }

    function areThereDemos(){

        if(!hasDemos){
            return(
                <p className={styles['noSubmissionMessage']} >There are no new submissons...</p>
            )
        }
    }
    return(
        <>
            <NavigationBar/>
            {isLoading}
            <div className={styles['newSubmissionPictureContainer']}>

                {areThereDemos()}
                {allUsers?.data && allUsers.data.map(user => (
                    displayUser(user)

                ))}



            </div>
        </>
    )
}
export default NewSubmissions;

