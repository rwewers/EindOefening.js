import React, { useEffect, useState, useContext} from 'react';
import { useAuthState} from '../../../context/AuthContext';
import './MyDemos.css';
import axios from "axios";
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";
import SongLoader from "../../../components/songLoader/SongLoader";
const songs= [];

function Mydemos() {

    let data={};

    const { user } = useAuthState()




    const getAudioContext =  () => {
        AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContent = new AudioContext();
        return audioContent;
    };

    useEffect(() => {


        fetchData()


//              TODO PAGINA REFRESHEN LOGT UIT!!!


        async function fetchData() {

            try {
                data = await axios.get(`http://localhost:8080/api/user/${user.userId}/demos`,  {

                    headers: {
                        'Authorization':  localStorage.getItem('token')
                    }});


                // for (let i = 0; i <data.length; i++) {
                //    const response = await axios.get(`http://localhost:8080/api/fileUpload/${data[i].fileName}`), {

                    // load audio file from server
                   // const response = await axios.get(`http://localhost:8080/api/fileUpload/0bf6a6a6-ba67-402b-8170-be5b1d7e154d.mp3`, {
                   //
                   //      responseType: 'arraybuffer',
                   //      headers: {
                   //          'Authorization':  localStorage.getItem('token')
                   //
                   //
                   //      }});


                    // console.log(response);

                    console.log(data);
                    //
                    //
                    //
                    //     songs.push(data);
                    //
                    // console.log(songs);


            //         // create audio context
            //
            //         const audioContext = getAudioContext();
            //         // create audioBuffer (decode audio file)
            //                             const audioBuffer = await audioContext.decodeAudioData(response.data);
            //
            //         // create audio source
            //                             const source = audioContext.createBufferSource();
            //                             source.buffer = audioBuffer;
            //                             source.connect(audioContext.destination);
            //
            //         // // play audio
            //         // source.start();
            // //

                // for (let i = 0; i <data.length ; i++) {
                //     console.log(songs[0][i].fileName)
                // }
                //


            } catch (error) {
                // TODO User error message
                console.log(error)
            }
        }

    ;


    }, [user])

     async function showData(response){

         console.log(response);

         // create audio context

         // const audioContext = getAudioContext();
         // // create audioBuffer (decode audio file)
         // const audioBuffer = await audioContext.decodeAudioData(response.data);
         //
         // // create audio source
         // const source = audioContext.createBufferSource();
         // source.buffer = audioBuffer;
         // source.connect(audioContext.destination);
         //
         // // // // play audio
         // source.start();
         //

    }


    console.log(data);

        return (
            <>
                <TopMenuCustomer/>
                {/*<button onClick={showData}>*/}
                {/*</button>*/}
                <ul>
                    <li>
                    {data && data.length > 0
                        ? data.map((songs) => {

                           return <SongLoader
                                className="test"
                                song={songs}
                            />
                        }
                        )
                        : "Loading..."}
                    </li>
                </ul>
            </>

        );


}

export default Mydemos;