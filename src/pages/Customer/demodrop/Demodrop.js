import React, { useState} from 'react';
import './Demodrop.css';
import InputField from "../../../components/InputValidation/InputFieldValidation";
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";
import axios from "axios";



function Demodrop() {

    const inputRefs = React.useRef([
        React.createRef(), React.createRef(), React.createRef()
    ]);
    const[data, setData] = React.useState({});

    const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
    }



    async function onSubmit(event) {
        event.preventDefault();


        console.log(data.file);
        console.log(data.songTitle);
        console.log(data.artist);
        console.log(document.getElementById("data.file".value))




        let isValid = true;

        for(let i = 0; i<inputRefs.current.length; i++ ){
            const valid =  inputRefs.current[i].current.validate()
            console.log(valid);
            if(!valid){
                isValid= false
            }
        }
        if(!isValid){
            return;
        }
        if(isValid === true) {
            try {
                console.log(isValid);

                console.log(data);

                console.log(data.file);


                const response = await axios.post('http://localhost:8080/api/files', {

                    file: data.file[0],
                    userId: parseInt(localStorage.getItem('id')),
                    fileName: "test.mp3" ,
                    songTitle: data.songTitle,
                    artist: data.artist

                })


                console.log(response);



            } catch (e) {
                console.log(e);
            }
        }
        //carry on as normal
    }

    return (
        <div className="parentDemodrop">
            <TopMenuCustomer />
            <h1 id="demodrop">DEMODROP</h1>

            <form onSubmit={onSubmit}>
                <InputField
                    ref={inputRefs.current[0]}
                    id="fileLabel"
                    name="file"
                    type="file"
                    label="File *"
                    onChange ={handleChange}
                    validation={"required"}
                />

                <InputField
                    ref={inputRefs.current[1]}
                    name="songTitle"
                    type="text"
                    label="Song title"
                    onChange ={handleChange}
                    validation={"required"}
                />
                <InputField
                    ref={inputRefs.current[2]}
                    name="artist"
                    type="text"
                    label="Artist"
                    onChange ={handleChange}
                />


                <button type="submit" >
                    Submit
                </button>

            </form>
        </div>

    );
}
export default Demodrop;