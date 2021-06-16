import React, { useEffect, useState, useContext} from 'react';
import { useAuthState} from '../../Context/AuthContext';
import axios from "axios";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SongLoader from "../../components/songLoader/SongLoader";
import CommentViewer from "../../components/CommentViewer/CommentViewer";


import styles from './MyDemos.module.css';


function Mydemos() {

    const [data, setData] = useState();

    const {user} = useAuthState()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {


        fetchData()


//              TODO PAGINA REFRESHEN LOGT UIT!!!


        async function fetchData() {
            setIsLoading(true)

            try {
                const response = await axios.get(`http://localhost:8080/api/user/${user.userId}/demos`, {

                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }

                });
                setData(response);
                setIsLoading(false)




            } catch (error) {
                // TODO User error message
                setIsLoading(false)
                console.log(error)
            }
        }

        ;


    }, [user])





    return (
        <>
            {isLoading}
            <NavigationBar/>

                    {data?.data && data.data.length > 0
                        ? data.data.map((song) => {

                                return <div className={styles['mydemosContainer']}>

                                     <label> {song.artist} - {song.songTitle} </label>
                                    <SongLoader
                                    song={song}
                                />
                                        <CommentViewer
                                            songId = {song.id} />
                                </div>
                            }
                        )
                        : <div className={styles['noDemoMessage']}>"There are no demo's yet..."</div>}


        </>

    );



}

export default Mydemos;