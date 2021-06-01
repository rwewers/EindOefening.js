import React, { useEffect, useState } from 'react'


import './VievComment.css'
import axios from "axios";
import {useAuthState} from "../../context/AuthContext";
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";
import SongLoader from "../../components/songLoader/SongLoader";
import CommentOptions from "../../components/CommentOptions/CommentOptions";
import {roles} from "../../components/Roles/Roles"


function ViewComment() {

    const urlParams = new URLSearchParams(window.location.search);
    var urlParameters = [];

    const {user} = useAuthState();
    const [isLoading, setIsLoading] = useState(false);
    const [comment, setComment] = useState({});
    const [song, setSong] = useState(null);
    let isAdmin = false;


    if(user){
        if(user.roles.includes(roles.ADMIN))
        {
            isAdmin = true;

        }
    }

    for (const param of urlParams) {
        urlParameters.push(param);

    }

    const songId = urlParameters[0][1];


    useEffect(() => {
        let timerId;
        fetchData()
         async function fetchData() {
                setIsLoading(true)
                try {

                    const data = await axios.get(`http://localhost:8080/api/demos/${songId}`, {
                        headers: {
                            'Authorization': localStorage.getItem('token')
                        }

                    })
                    setIsLoading(false);


                    if (data) {
                        setSong(data.data)
                        setComment(data.data.comment)
                    }




                } catch (error) {
                    // TODO User error message
                    setIsLoading(false)
                    console.log(error)

        }


    }
        return () => clearTimeout(timerId)

    } , [songId], isAdmin)



    console.log(song);
    console.log(comment);



    return (
        !isLoading && song && user?
            (
                <div>
                    <TopMenuCustomer/>
                    <h3 className="h3comment">View comment</h3>
                    {song && <SongLoader song={song} />}
                    <p className="CommentMessage">
                        {comment && comment.message}
                    </p>
                    {comment && (
                        <CommentOptions song={song} comment={comment}/>
                    )}
                </div>
            ): (
                <div>
                    <TopMenuCustomer/>
                    <h1>test2</h1>
                </div>
            )
    );

}

export default ViewComment