import React, { useState} from 'react';
import './Demodrop.css';
import InputField from "../../../components/InputValidation/InputFieldValidation";
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";
import axios from "axios";



function Demodrop() {


    const inputRefs = React.useRef([
        React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()
    ]);
    const[data, setData] = React.useState({});

    const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
    }



    async function onSubmit(event) {
        event.preventDefault();

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


                const response = await axios.post('http://localhost:8080/api/auth/demodroptest', {

                    user_ID: parseInt(localStorage.getItem('id')),
                    name: data.name,
                    country: data.country,
                    facebook: data.facebook,
                    instagram: data.instagram,
                    artistnameSongname: data.artistnameSongname,
                    musicfile: data.musicfile,
                    personalMessage: data.personalMessage


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
                        name="name"
                        label="Name *"
                        onChange ={handleChange}
                        validation={"required"}
                    />

                       <InputField
                           ref={inputRefs.current[1]}
                           name="country"
                           label="Country * "
                           onChange ={handleChange}
                           validation={"required"}
                       />
                       <InputField
                           ref={inputRefs.current[2]}
                           name="facebook"
                           label="Facebook"
                           onChange ={handleChange}
                       />
                       <InputField
                           ref={inputRefs.current[3]}
                           name="instagram"
                           label="Instagram"
                           onChange ={handleChange}
                       />
                       <InputField
                           ref={inputRefs.current[4]}
                           name="artistnameSongname"
                           label="Artistname - Songname *"
                           onChange ={handleChange}
                           validation={"required"}
                       />
                       <InputField
                           ref={inputRefs.current[5]}
                           name="musicfile"
                           label="Music-file *"
                           onChange ={handleChange}
                           validation={"required"}
                       />
                       <InputField
                           ref={inputRefs.current[6]}
                           id="personalText"
                           name="personalMessage"
                           label="Personal message *"
                           onChange ={handleChange}
                           validation={"required|max:250"}
                       />

                       <button type="submit" >
                           Submit
                       </button>

                    </form>
                    </div>

    );
}
export default Demodrop;

