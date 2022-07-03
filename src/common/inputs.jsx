import React from "react";

const Inputs = ({id,value,name,label,onChange}) => {
  return (
    <React.Fragment>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            value={value}
            name={name}
            onChange={onChange}
            type="text"
            className="form-control"
        />
    </React.Fragment>
  );
};
export default Inputs;
