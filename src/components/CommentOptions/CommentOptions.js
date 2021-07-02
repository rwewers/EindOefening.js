import React, {useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {useAuthState} from "../../Context/AuthContext";
import axios from "axios";
import DeleteConformation from "./DeleteComment";
import {roles} from "../Roles/Roles";

import styles from "./CommentOptions.module.css"

function CommentOptions({song, comment, userId}) {

    const {user} = useAuthState();
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()
    let isAdmin = false;

    if (user) {
        if (user.roles.includes(roles.ADMIN)) {
            isAdmin = true;

        }
    }

    async function modalAction(allowAction) {
        setShowModal(false)
        if (allowAction) {
            try {
                const result = await axios.delete(`http://localhost:8080/api/comments/${comment.commentId}`,
                    {
                        headers: {
                            'Authorization': localStorage.getItem('token')
                        }
                    }
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

                        <p key="edit"><NavLink className={styles['writeNewComment']}
                                               to={`/editComment?songId=${song.id}`}>Edit comment</NavLink></p>
                        <p key="delete">
                            <NavLink
                                className={styles['writeNewComment']}
                                to={'#'}
                                onClick={() => setShowModal(true)}
                            >
                                Delete comment
                            </NavLink>
                        </p>
                    </>
                ) : (

                    <p key="write"><NavLink className={styles['writeNewComment']}
                                            to={`/writeComment?songId=${song.id}&&userId=${userId}`}>Write new
                        comment</NavLink></p>
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