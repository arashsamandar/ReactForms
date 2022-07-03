import React, { Component } from "react";
import Inputs from "../common/inputs";
import Form from "../common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
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
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("arash", "Samandar", "password")}
        {this.renderButton("Login")}
      </form>
    );
  }
}
export default RegisterForm;
