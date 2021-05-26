import React, { useEffect, useState } from 'react'
import { useHistory} from 'react-router-dom'
import SongLoader from "../../components/songLoader/SongLoader";
import axios from "axios";
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";


function EditComment() {

    const urlParams = new URLSearchParams(window.location.search);
    var urlParameters = [];

    const [comment, setComment] = useState(null)
    const [song, setSong] = useState(null)
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    for (const param of urlParams) {
        urlParameters.push(param);

    }
    const songId = urlParameters[0][1];

    useEffect(() => {
        fetchData()
        async function fetchData() {
            setIsLoading(true)
            try {
                const data = await axios.get(`http://localhost:8080/api/demos/1`, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }

                })
                setIsLoading(false);
                console.log(data);
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
    }, [songId])

    function handleChange(event) {
        const updatedComment = { ...comment }
        updatedComment.message = event.target.value
        updatedComment.demoId = parseInt(songId)
        updatedComment.viewed = false
        setComment(updatedComment)
    }

    async function handleSave() {
        setIsLoading(true)
        try {

            await axios.put(`http://localhost:8080/api/comments/${comment.commentId}`, comment, {
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

        setIsLoading(false)
        history.push(`/viewComment?songId=${songId}`)

    }

    return (

        !isLoading ?(
            <div className="center">
                <TopMenuCustomer/>
                <div className="full-page">
                    <h3>Edit commentd</h3>
                    {song && <SongLoader song={song} />}
                    <p className="comment">
                        {comment && (
                            <textarea
                                value={comment.message}
                                onChange={handleChange}
                            />
                        )}
                    </p>
                    <button
                        className="save"
                        type="button"
                        onClick={handleSave}
                    >Save comment</button>
                </div>
            </div>
        ) :(
            <div>
                <TopMenuCustomer/>
                <h1>test2</h1>
            </div>
        )

    );
}

export default EditComment;