import React,{Component} from "react";

const Input = ({name,label,value,onChange,error}) => {
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                type="text"
                className="form-control" />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}
export default Input;