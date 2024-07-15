import {HTMLInputTypeAttribute} from "react";

interface TextInputProps{
    label: string;
    id: string;
    defaultValue?: string;
    required?: boolean
    type?: HTMLInputTypeAttribute
}
const TextInput = (props: TextInputProps)=>{
    const { label, id, defaultValue, required = false, type = "text"} = props;
    return(
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={id} name={id} type={type} defaultValue={defaultValue} required={required}/>
        </div>
    )
}

export default TextInput;