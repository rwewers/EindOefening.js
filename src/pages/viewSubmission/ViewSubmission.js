import React, { useEffect, useState } from 'react';
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";
import axios from "axios";
import SongLoader from "../../components/songLoader/SongLoader";
import CommentOptions from "../../components/CommentOptions/CommentOptions";

import styles from "./viewSubmission.module.css";

function ViewSubmission(){

    const urlParams = new URLSearchParams(window.location.search);
    const [userData, setUserData] = useState();
    const [demoData, setDemoData] = useState();
    const [isLoading, setIsLoading] = useState(false)
    var urlParameters = [];
    const [comment, setComment] = useState({});
    const [song, setSong] = useState(null);


    for (const param of urlParams) {
        urlParameters.push(param);

    }


    console.log(urlParameters);

    useEffect(() => {
        fetchData()
//              TODO PAGINA REFRESHEN LOGT UIT!!!
        async function fetchData() {




            setIsLoading(true)

            try {
                const userData = await axios.get(`http://localhost:8080/api/user/${urlParameters[0][1]}`, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                })
                const demoResponse = await axios.get(`http://localhost:8080/api/demos/${urlParameters[1][1]}`, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                })
                setUserData(userData);
                setDemoData(demoResponse);
                setIsLoading(false)

                if (demoResponse) {

                    setSong(demoResponse.data)
                    setComment(demoResponse.data.comment)

                }

            } catch (error) {
                // TODO User error message
                setIsLoading(false)
                console.log(error)
            }
        };
    }, [])

    function showingComment(comment){

        if(comment != null){
            return(

                <li>
                    Comment: {comment.message}
                </li>
                //  <li>
                // <CommentOptions song={song} comment={comment}/>
                // </li>

            )

        }
    }

    function showingCommentOptions(comment){

        if(comment != null){
            return(


                 <li>
                <CommentOptions song={song} comment={comment}/>
                </li>
            )


        }
        else{
            return(
                <li>
                    <CommentOptions song={song} comment={comment}/>
                </li>
            )
        }

    }
    return(
            !isLoading && demoData && song  ?
                    (
                        <>
                            <TopMenuCustomer/>
                            <div className={styles['containerViewSubmission']}>
                            <h1>{demoData.data.artist} + {demoData.data.songTitle}</h1>
                                <ul className={styles['listViewSubmission']}>
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
                                    {showingComment(comment)}
                                    {showingCommentOptions(comment)}
                                </ul>
                                <SongLoader
                                   song={demoData.data}
                                />

                            </div>

                         </>
                    ) : (
                    <>
                        <TopMenuCustomer/>

                        <h1> teasdsadsad</h1>
                    </>
                    )


    );

}
export default ViewSubmission;