import React, {useEffect, useState} from 'react'
import axios from "axios";
import ReactAudioPlayer from 'react-audio-player';
import {useAuthState} from "../../context/AuthContext";


function SongLoader({song}) {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState();
    const {user} = useAuthState()


    useEffect(() => {
        playMusic();

        async function playMusic() {
            setIsLoading(true)
            try {
                const response = await axios.get(`http://localhost:8080/api/fileUpload/${song.fileName}`, {
                    responseType: 'arraybuffer',
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                });
                setData(response.config.url);
                setIsLoading(false)

            } catch (error) {
                setIsLoading(false)
                // TODO User error message

                console.log(error)
            }
        }

        // eslint-disable-next-line
    }, [user])
    return (
        <> {isLoading}
            <div className="songLoader">
                <ReactAudioPlayer
                    src={data}
                    // preload={data}
                    // autoPlay
                    controls
                />
            </div>
        </>
    )
}

export default SongLoader;