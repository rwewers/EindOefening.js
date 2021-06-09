import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SongLoader from "../../components/songLoader/SongLoader";

import styles from './Comment.module.css'


function Writecomment(){

    const urlParams = new URLSearchParams(window.location.search);
    var urlParameters = [];
    const [comment, setComment] = useState({})
    const [song, setSong] = useState(null)
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [textComment, setTextComment] = useState();
    const [userData, setUserData] = useState();

    for (const param of urlParams) {
        urlParameters.push(param);
    }
    let songId = urlParameters[0][1];
    let userId = urlParameters[1][1];
    console.log(userId);




    useEffect(() => {
        fetchData()
        async function fetchData() {
            setIsLoading(true)
            try {

                const demoDataResponse = await axios.get(`http://localhost:8080/api/demos/${songId}`, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                })


                    const userDataResponse = await axios.get(`http://localhost:8080/api/user/${userId}`, {
                        headers: {
                            'Authorization': localStorage.getItem('token')
                        }
                    })


                setIsLoading(false)
                setSong(demoDataResponse);

                setUserData(userDataResponse.data);
                const newComment = {}
                newComment.demoId = songId
                newComment.message = ''

        } catch (error) {
                // TODO User error message
                setIsLoading(false)
                console.log(error)
            }

        }

    }, [songId])

    function handleChange(event) {
        const updatedComment = { ...comment }
        updatedComment.message = event.target.value
        updatedComment.demoId = songId
        setComment(updatedComment)
    }
    async function handleSave() {

        console.log(comment);
        setIsLoading(true)
        try {

            await axios.post(`http://localhost:8080/api/comments/` , comment , {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
            setIsLoading(false)
            history.push(`/viewComment?songId=${songId}`)

        } catch (error) {
            // TODO User error message
            setIsLoading(false)
            console.log(error)
        }
    }

    function jsFunction(value){
        if(value === "1"){

            setTextComment(`Dear ${userData.fullName}, 
                 
Thanks for sending you track: ${song.data.artist} - ${song.data.songTitle}!

We listened to it, and its a dope track.
 
Thats why we wanna invite you to meet us at our location.

We will send u an invitation within a week.

Kind regards,

Team Don Diablo.
` );

        }
        else if(value === "2"){

            setTextComment(`Dear ${userData.fullName}, 
                 
Thanks for sending you track: ${song.data.artist} - ${song.data.songTitle}!

Its a decent track, but we don't see us using it or working with it.

We thank you for your time and wish you good luck in the future.

Kind regards,

Team Don Diablo.
` );

        }
        else{
          setTextComment(`Dear ${userData.fullName}, 
                 
Thanks for sending you track: ${song.data.artist} - ${song.data.songTitle}!

We didn't have the time to listen to it yet.

Thats why we need more time.

We will send an response wihtin a week. 

Kind regards,

Team Don Diablo.
`  );
        }

    }
    console.log(userData);
    console.log(song);





    return(
        !isLoading && song ?
            (
                <div>
                    <NavigationBar/>
                    <div className={styles['writeCommentContainer']}>
                        <select name="type" onChange={e => jsFunction(e.target.value) }>
                            <option value="1">Good submission</option>
                            <option value='2'>Bad submission</option>
                            <option value='3'>Need more time</option>
                        </select>
                    <h1>Write Comment</h1>
                   <SongLoader song={song.data} />
                        <textarea
                            className={styles['writeCommentTextArea']}
                            onChange={handleChange}
                            value={textComment}
                        ></textarea>

                    <button
                        className={styles['saveCommentButton']}

                        type="button"
                        onClick={handleSave}
                    >Save comment</button>

                    </div>


                </div>
    ): (
                <div>
                    <NavigationBar/>
                    <h1>test2</h1>
                </div>
    )
    );
}

export default  Writecomment;