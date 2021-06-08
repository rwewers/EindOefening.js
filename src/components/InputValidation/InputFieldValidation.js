import React, {forwardRef, useImperativeHandle} from "react";
import './InputFieldValidation.css';
let password1 = ``;


const InputField = forwardRef((props, ref) => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value)
        setError("");
        props.onChange(event.target.name, event.target.value)

    }

    const validate = () => {
        if(props.validation) {
        const rules = props.validation.split("|");
            for (let i = 0; i < rules.length ; i++) {
                const current = rules[i];
                if(current === "required"){
                    if(!value){
                        setError("This field is required")
                        return false;
                    }
                }
                if(current === "password1") {
                   password1 = value;

                }
                    if(current === "password"){
                    const loweCase = new RegExp("^(?=.*[a-z])");
                    const upperCase = new RegExp("^(?=.*[A-Z])")
                    const numeric = new RegExp("^(?=.*[0-9])")
                    const special = new RegExp("^(?=.*[!@#$%^&*])")
                    const charactersLong = new RegExp("^(?=.{8,})")

                    if(!loweCase.test(value)){
                        setError("Password must contain at least 1 lowercase character");
                        return false;
                    }
                    if(!upperCase.test(value)){
                        setError("Password must contain at least 1 uppercase character");
                        return false;
                    }
                    if(!numeric.test(value)){
                        setError("Password must contain at least 1 numeric character");
                        return false;
                    }
                    if(!special.test(value)){
                        setError("Password must contain at least 1 least one special character");
                        return false;
                    }
                    if(!charactersLong.test(value)){
                        setError("Password must be eight characters or longer");
                        return false;
                    }
                }

                if(current === "file") {
                    if (!value) {
                        setError("This field is required")
                        return false;
                    }
                    const fi = document.getElementById('fileLabel').files[0];
                    if(fi.type !== "audio/mpeg"){
                        setError("File type should be mp3");
                        return false;
                    }
                    const fsize = fi.size;
                    const file = Math.round((fsize / 1024));
                    if (file >= 10090) {
                        setError("File too Big, please select a file less than 10mb");
                        return false;
                    }
                }

                if(current === "email"){
                    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                    if(!pattern.test(value)){
                        setError("invalid email");
                        return false;
                    }

                }
                if(current === "passwordRepeat"){
                    if(value !== password1){
                        setError("Passwords dont match")
                        return false;
                    }
                }
                const pair = current.split(":");
                switch (pair[0]){
                    case "min":
                        if(value.length < pair[1]){
                            setError(`This field must be at least ${pair[1]} characters long`)
                            return false;
                        }
                        break;

                        case "max":
                        if(value.length > pair[1]){
                            setError(`This field can be longer than ${pair[1]} characters long`)
                            return false;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        return true;
    }

    useImperativeHandle(ref,()=>{
        return {
            validate: () => validate ()
        }
    })

    return(
        <div className="divInputField">
            {props.label && (
                <label>{props.label}</label>
            )}
            <input
                placeholder={props.placeholder}
                name={props.name}
                onChange={(event) => handleChange(event)}
                id={props.id}
                type={props.type}
                value={props.value ? props.value : value}

            />
            {error && (
                <p className="error">{error} </p>
            )}
        </div>
    )

})
InputField.defaultProp={
    placeholder: "",
    name: "",
    type: "",
    value: "",
    id: "",
    validation: ""


}

export default InputField;