import React,{Component} from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Joi from 'joi-browser';
import Form from "../common/form";

class LoginForm extends Form {
  state = {
    errors: {},
    data: { username: "", password: "" },
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call Server
    console.log('Submitted')
  }
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data: data, errors });
  };
  render() {

    return (
      <form onSubmit={this.handleSubmit} className="container">
        {this.renderInput('username','Username')}
        {this.renderInput('password','Password','password')}
        {this.renderButton('Login')}
      </form>
    );
  }
}
export default LoginForm;