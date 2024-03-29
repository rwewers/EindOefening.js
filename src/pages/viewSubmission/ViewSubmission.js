import React, {useEffect, useState} from 'react';
import NavigationBar from "../../components/navigationBar/NavigationBar";
import axios from "axios";
import SongLoader from "../../components/songLoader/SongLoader";
import CommentOptions from "../../components/commentOptions/CommentOptions";

import styles from "./viewSubmission.module.css";

function ViewSubmission() {

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


    useEffect(() => {
        fetchData()


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
                
                setIsLoading(false)
                console.log(error)
            }
        };
        // eslint-disable-next-line
    }, [])

    function showingComment(comment) {

        if (comment != null) {
            return (
                <div className={styles['showCommentDiv']}>

                    Comment:
                    <textarea className={styles['viewCommentViewSubmission']} value={comment.message}/>

                </div>

            )

        }
    }

    function showingCommentOptions(comment) {

        if (comment != null) {
            return (


                <CommentOptions song={song} comment={comment} userId={userData.data.userId}/>

            )


        } else {
            return (

                <CommentOptions song={song} comment={comment} userId={userData.data.userId}/>

            )
        }

    }

    return (
        !isLoading && demoData && song ?
            (
                <>
                    <NavigationBar/>
                    <div className={styles['containerViewSubmission']}>
                        <h1>{demoData.data.artist} - {demoData.data.songTitle}</h1>
                        <table className={styles['tableViewSubmission']}>
                            <tbody>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Facebook</th>
                                <th>Instagram</th>

                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>{userData.data.firstName}</td>
                                <td>{userData.data.lastName}</td>
                                <td>{userData.data.email}</td>
                                <td>{userData.data.country}</td>
                                <td>{userData.data.facebook}</td>
                                <td>{userData.data.instagram}</td>
                            </tr>
                            </tbody>

                        </table>
                        <div className={styles['spaceDivViewComment']}></div>
                        {showingComment(comment)}
                        {showingCommentOptions(comment)}

                        <SongLoader
                            song={demoData.data}
                        />

                    </div>
                </>
            ) : (
                <>
                    <NavigationBar/>

                    <h1> teasdsadsad</h1>
                </>
            )


    );

}

export default ViewSubmission;
