import React from 'react';
import './Contact.css';
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";
import InputField from "../../components/InputValidation/InputFieldValidation";


function Contact() {
    const inputRefs = React.useRef([
        React.createRef(), React.createRef(), React.createRef(), React.createRef()
    ]);
    const[data, setData] = React.useState({});

    const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
    }


    // console.log(inputRefs);

    const submitForm = (e) => {
        e.preventDefault();

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

        //carry on as normal
    }

    return (
        <div>
            <TopMenuCustomer />
            <h1 id="demodrop">Contact</h1>
            <form onSubmit={submitForm}>
                <InputField
                    ref={inputRefs.current[0]}
                    name="name"
                    label="Name *"
                    onChange ={handleChange}
                    validation={"required|min:5|max:12"}
               />
                <InputField
                    ref={inputRefs.current[1]}
                    name="Email address"
                    label="Email address *"
                    onChange ={handleChange}
                    validation={"required|email"}
                />
                <InputField
                    ref={inputRefs.current[2]}
                    name="Subject"
                    label="Subject *"
                    onChange ={handleChange}
                    validation={"required"}
                />
                <InputField
                    id="labelmessage"
                    ref={inputRefs.current[3]}
                    name="Message"
                    label="Message *"
                    onChange ={handleChange}
                    validation={"required"}
                />


                <button type="submit" >
                    Submit
                </button>

            </form>
        </div>
    );
}
export default Contact;

