import React, { useEffect, useState } from 'react'
import './WriteComment.css'
import { useHistory } from 'react-router-dom'
import axios from "axios";
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";
import SongLoader from "../../components/songLoader/SongLoader";



function Writecomment(){

    const urlParams = new URLSearchParams(window.location.search);
    var urlParameters = [];
    const [comment, setComment] = useState({})
    const [song, setSong] = useState(null)
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)



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

    return(
        !isLoading && song?
            (
                <div>
                    <div className="writeComment">
                    <TopMenuCustomer/>
                    <h1>Write Comment</h1>
                   <SongLoader song={song.data} />}
                    <p>
                    <textarea
                        value={comment.message}
                        onChange={handleChange}
                    />
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