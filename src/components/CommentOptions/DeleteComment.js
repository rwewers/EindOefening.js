import './DeleteComment.css'
import React from 'react'

function DeleteComment({ message, action }) {
    return (
        <div className="model">
            <h3 className="deleteMessage">{message}</h3>
            <div>
                <button
                    className="customButton"
                    type="button"
                    onClick={() => action(false)}
                >
                  Cancel
                </button>
                <button
                    className="customButton"
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