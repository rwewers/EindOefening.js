import React from 'react';
import './Demodrop.css';
import InputField from "../../../components/InputValidation/InputFieldValidation";
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";


function Demodrop() {


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
                        <TopMenuCustomer />
                    <h1 id="demodrop">DEMODROP</h1>
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
                           name="emailaddress"
                           label="Email address * "
                           onChange ={handleChange}
                           validation={"required|email"}
                       />
                       <InputField
                           ref={inputRefs.current[2]}
                           name="country"
                           label="Country * "
                           onChange ={handleChange}
                           validation={"required"}
                       />
                       <InputField
                           ref={inputRefs.current[3]}
                           name="facebook"
                           label="Facebook"
                           onChange ={handleChange}
                       />
                       <InputField
                           ref={inputRefs.current[4]}
                           name="instagram"
                           label="Instagram"
                           onChange ={handleChange}
                       />
                       <InputField
                           ref={inputRefs.current[5]}
                           name="atristname-songname"
                           label="Artistname - Songname *"
                           onChange ={handleChange}
                           validation={"required"}
                       />
                       <InputField
                           ref={inputRefs.current[6]}
                           name="music-file"
                           label="Music-file *"
                           onChange ={handleChange}
                           validation={"required"}
                       />
                       <InputField
                           ref={inputRefs.current[7]}
                           id="personalText"
                           name="personal-message"
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

