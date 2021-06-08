import React, {useEffect, useState} from 'react';
import axios from "axios";
import './CommentViewer.css';

function CommentViewer({songId}){

    const [isLoading, setIsLoading] = useState(false);
    const [comment, setComment] = useState({});
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
                setIsLoading(false);
                if (data) {
                    setComment(data.data)
                }
            } catch (error) {
                // TODO User error message
                setIsLoading(false)
                console.log(error)
            }
        }
    } , [songId])

    return (
        !isLoading && comment.comment != null ?(
        <div>
            <p className="testClassP">
                Comment : {comment.comment.message}
            </p>
        </div>
        ):(
            <div>
               <p className="testClassP">There is no comment yet...</p>
            </div>
        )
    );
}
export default CommentViewer;