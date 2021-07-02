import styles from './CommentOptions.module.css'
import React from 'react'

function DeleteComment({message, action}) {
    return (
        <div className={styles['modelDelete']}>
            <h3 className={styles['deleteMessage']}>{message}</h3>
            <div>
                <button
                    className={styles['customButton']}
                    type="button"
                    onClick={() => action(false)}
                >
                    Cancel
                </button>
                <button
                    className={styles['customButton']}
                    type="button"
                    // color="warning"
                    onClick={() => action(true)}
                >
                    Ok
                </button>

            </div>
        </div>
    )
}

export default DeleteComment;