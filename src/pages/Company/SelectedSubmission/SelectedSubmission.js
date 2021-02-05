import React from 'react';
import './SelectedSubmission.css';
import TopMenuCompany from "../../../components/TopMenuCompany/TopMenuCompany";
import InputField from "../../../components/InputValidation/InputFieldValidation";


function SelectedSubmission() {

    const inputRefs = React.useRef([
        React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()
    ]);
    const[data, setData] = React.useState({});

    const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
    }

    console.log(data);
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
                <TopMenuCompany/>
            <div>

            </div>
        </div>

    );
}

export default SelectedSubmission;