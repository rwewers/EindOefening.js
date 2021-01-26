import React, {forwardRef, useImperativeHandle} from "react";
import './InputFieldValidation.css';

const InputField = forwardRef((props, ref) => {
    const[value, setValue] = React.useState("");
    const [error, setError] = React.useState("");
    const handleChange = (event) => {

        setValue(event.target.value)
        setError("");
        props.onChange(event.target.name, event.target.value)
    }

    const validate = () => {
        // return true if is valid
        // else return false

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

                if(current === "email"){

                    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

                    if(!pattern.test(value)){
                        setError("invalid email");
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
    type: "text",
    value: "",
    id: "",
    validation: ""


}

export default InputField;