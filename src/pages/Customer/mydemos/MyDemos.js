import React, { useState} from 'react';
import './MyDemos.css';
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";
import axios from "axios";
import InputField from "../../../components/InputValidation/InputFieldValidation";



function Mydemos() {

    async function onSubmit(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('userId', localStorage.getItem('id'))

            try {

                for (let pair of formData.entries()) {
                    console.log(pair[0] + " - " + pair[1]);
                }

                const axiosLink = axios.create({
                    baseURL: 'http://localhost:8080/api'
                })
                const data = await axiosLink.post('/fileUpload/user_id', formData, {

                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization':  localStorage.getItem('token')
                    }
                })

                console.log(data);

                for (let i = 0; i <data.data.length; i++) {
                    console.log(await axios.get(`http://localhost:8080/api/fileUpload/${data.data[i].fileName}`));
                }

            } catch (e) {
                console.log(e);
            }
        }
        //carry on as normal


    return (
        <div>
            <form onSubmit={onSubmit}>
                <TopMenuCustomer />


                <button type="submit" >
                    Submit
                </button>

            </form>
        </div>

    );
}

export default Mydemos;