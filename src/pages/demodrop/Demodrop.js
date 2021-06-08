import React, { useState} from 'react';
import './Demodrop.css';
import InputField from "../../components/InputValidation/InputFieldValidation";
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";
import axios from "axios";
import {Link, NavLink} from "react-router-dom";
function Demodrop() {
    let file;
    let fileName;
    const[demoDropSucces, setDemoDropSucces] = useState(false);
    const inputRefs = React.useRef([
        React.createRef(), React.createRef(), React.createRef()
    ]);
    const[data, setData] = React.useState({});
    const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
    }
    async function onSubmit(event) {
        event.preventDefault();
        if(document.getElementById("fileLabel").files[0] != null){
            file = document.getElementById("fileLabel").files[0];
            fileName = document.getElementById("fileLabel").files[0].name;
        }
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
            if(!valid){
                isValid= false
            }
        }
        if(!isValid){
            return;
        }
        if(isValid === true) {
            try {
                const axiosLink = axios.create({
                    baseURL: 'http://localhost:8080/api'
                })
                const response = await axiosLink.post('/fileUpload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                            'Authorization':  localStorage.getItem('token')
                    }
                })
                if (response.data === "File is uploaded successfully") {
                    setDemoDropSucces(true);
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <div >
        <TopMenuCustomer />
            <div className="pictureContainer">
            {demoDropSucces === true &&(
                <h2 className="message-succes">File uploaded. Click <NavLink to="/myDemos">here</NavLink> to see my demos's.</h2>
            )}
            <form onSubmit={onSubmit}>
                <InputField
                    ref={inputRefs.current[0]}
                    id="fileLabel"
                    name="file"
                    type="file"
                    label="File ( less than 10 mb) "
                    onChange ={handleChange}
                    validation={"required|file"}
                />
                <InputField
                    ref={inputRefs.current[2]}
                    id="fileLabel"
                    name="artist"
                    type="text"
                    label="Artist"
                    onChange ={handleChange}
                    validation = {"required"}
                />
                <InputField
                    ref={inputRefs.current[1]}
                    id="fileLabel"
                    name="songTitle"
                    type="text"
                    label="Songtitle"
                    onChange ={handleChange}
                    validation={"required"}
                />
                <button type="submit" >
                    Submit
                </button>
            </form>
        </div>
        </div>
    );
}
export default Demodrop;