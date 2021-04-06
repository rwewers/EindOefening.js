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

        // console.log(data.file);



    }



    async function onSubmit(event) {
        event.preventDefault();

        const file = document.getElementById("fileLabel").files[0];
        const fileName = document.getElementById("fileLabel").files[0].name;

        let formData = new FormData();
        formData.append('file', file )
        formData.append('userId', localStorage.getItem('id'))
        formData.append('fileName', fileName)
        formData.append('songTitle', data.songTitle)
        formData.append('artist', data.artist)

        for (let pair of formData.entries()) {
            console.log(pair[0] + " - " + pair[1]);
        }


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


                const axiosLink = axios.create({
                    baseURL: 'http://localhost:8080/api'
                })
                await axiosLink.post('/fileUpload', formData, {

                    headers: {
                        'Content-Type': 'multipart/form-data',
                            'Authorization':  localStorage.getItem('token')
                    }

                })








            } catch (e) {
                console.log(e);
            }
        }
        //carry on as normal
    }

    return (
        <div className="parentDemodrop">
            <TopMenuCustomer />


            <form onSubmit={onSubmit}>
                <InputField
                    ref={inputRefs.current[0]}
                    id="fileLabel"
                    name="file"
                    type="file"
                    label="File "
                    onChange ={handleChange}
                    validation={"required"}
                />

                <InputField
                    ref={inputRefs.current[1]}
                    name="songTitle"
                    type="text"
                    label="Songtitle"
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