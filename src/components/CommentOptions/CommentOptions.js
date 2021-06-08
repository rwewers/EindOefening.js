import React, { useState } from 'react'
import {Link, NavLink, useHistory} from 'react-router-dom'
import {useAuthState} from "../../context/AuthContext";
import axios from "axios";
import DeleteConformation from "./DeleteComment";
import {roles} from "../Roles/Roles";

function CommentOptions({ song, comment}) {

    const {user} = useAuthState();
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()
    let isAdmin = false;

    if(user){
        if(user.roles.includes(roles.ADMIN))
        {
            isAdmin = true;

        }
    }
    async function modalAction(allowAction) {
        setShowModal(false)
        if (allowAction) {
            try {
                const result = await axios.delete(`http://localhost:8080/api/comments/${comment.commentId}`,
                    { headers: {
                            'Authorization': localStorage.getItem('token')
                        } }
                )
                if (result) {
                    history.push(`/newsubmissions`)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>

            {isAdmin}
                <>
                    {comment ? (
                        <>

                            <li key="edit"><Link to={`/editComment?songId=${song.id}`}>Edit comment</Link></li>
                            <li key="delete">
                                <Link
                                    to={'#'}
                                    onClick={() => setShowModal(true)}
                                >
                                    Delete comment
                                </Link>
                            </li>
                        </>
                    ) : (

                        <li key="write"><NavLink to={`/writeComment?songId=${song.id}`}>Write new comment</NavLink></li>
                    )}
                </>
            {showModal && (
                <DeleteConformation
                    action={modalAction}
                    message="Are you sure you want to delete this comment?"
                />
            )}
        </>
    )
}

export default CommentOptions