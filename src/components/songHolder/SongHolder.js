import React, { useContext,createContext, useRef, useState  } from 'react'
import { Link } from 'react-router-dom'

function SongHolder() {

    const audio = useRef()
    const [currentSong, setSong] = useState(null)


    function setCurrentSong(song) {
        setSong(song)
        if (song) {
            audio.current.src = `${process.env.REACT_APP_BASE_URL}api/files/${song.fileName}`
        }
    }

    return(
        <div>

        </div>

    )

}
export default SongHolder;