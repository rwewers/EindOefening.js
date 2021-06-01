import React, { useEffect, useState, useContext} from 'react';
import { useAuthState} from '../../context/AuthContext';
import './MyDemos.css';
import axios from "axios";
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";
import SongLoader from "../../components/songLoader/SongLoader";
import CommentViewer from "../../components/CommentViewer/CommentViewer";

const songs= [];

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


    if(isLoading === false){
        console.log(data);
    }

    console.log(data);


    return (
        <>
            {isLoading}
            <TopMenuCustomer/>

                    {data?.data && data.data.length > 0
                        ? data.data.map((song) => {

                                return <div className="demodropContainer">

                                     <label> {song.artist} + {song.songTitle} </label>
                                    <SongLoader
                                    className="test"
                                    song={song}
                                />
                                        <CommentViewer
                                            songId = {song.id} />
                                </div>
                            }
                        )
                        : "Loading..."}


        </>

    );



}

export default Mydemos;