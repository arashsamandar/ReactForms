import React,{Component} from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Input from "./input";
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
    const { data } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <Input
          label="Username"
          name="username"
          value={data.username}
          onChange={this.handleChange}
          error={this.state.errors.username}
        />
        <Input
          label="Password"
          name="password"
          value={data.password}
          onChange={this.handleChange}
          error={this.state.errors.password}
        />
        <button disabled={this.validate()} className="btn btn-primary m-3">
          Login
        </button>
      </form>
    );
  }
}
export default LoginForm;