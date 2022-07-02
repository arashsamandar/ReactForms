import React,{Component} from "react";
import Joi from "joi-browser";

export default class Form extends Component{
    state = {
        data:{},
        errors:{}
    };
    validate = () => {
        const option = { abortEarly: false };
        const result = Joi.validate(this.state.data, this.schema, option);
        if (!result.error) return null;
        const errors = {};
        for (let item of result.error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    };
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = { ...this.state.data };
        account[input.name] = input.value;
        this.setState({ account, errors });
    };
}