import React from 'react'
import './SongLoader.css';

function SongLoader({song}) {


    function playSong() {

    }


    return (
        <div className="songLoader">

            <label>{song.songTitle} + {song.artist}</label>

            <button className="buttonLoader"
                onClick={playSong}>
                <span>play</span>
            </button>


        </div>

    )
}

export default SongLoader;