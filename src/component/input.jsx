import React,{Component} from "react";

const Input = ({name,label,value,error,...rest}) => {
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                {...rest}
                id={name}
                className="form-control" />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}
export default Input;