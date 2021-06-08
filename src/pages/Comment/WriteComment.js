import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios";
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";
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


    for (const param of urlParams) {
        urlParameters.push(param);
    }
    let songId = urlParameters[0][1];




    useEffect(() => {
        fetchData()
        async function fetchData() {
            setIsLoading(true)
            try {

                const data = await axios.get(`http://localhost:8080/api/demos/${songId}`, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                })
                setIsLoading(false)
                setSong(data)
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

            setTextComment("nico");
            console.log(textComment);

        }
        else if(value === "2"){

            setTextComment("parkiet");
            console.log(textComment);

        }
        else{
          setTextComment("Snoef");
            console.log(textComment);
        }

    }



    return(
        !isLoading && song ?
            (
                <div>
                    <TopMenuCustomer/>
                    <div className={styles['writeCommentContainer']}>
                        <select name="type" onChange={e => jsFunction(e.target.value) }>
                            <option value="1">One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                        </select>
                    <h1>Write Comment</h1>
                   <SongLoader song={song.data} />}


                    <p>


                    </p>

                    <button

                        type="button"
                        onClick={handleSave}
                    >Save comment</button>

                    </div>


                </div>
    ): (
                <div>
                    <TopMenuCustomer/>
                    <h1>test2</h1>
                </div>
    )
    );
}

export default  Writecomment;