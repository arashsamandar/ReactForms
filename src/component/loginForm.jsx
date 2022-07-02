import React,{Component} from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Input from "./input";
import Joi from 'joi-browser';

class LoginForm extends Component {
  state = {
    errors: {},
    account: { username: "", password: "" },
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("submitted");
  };
  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, option);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const error = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <Input
          label="Username"
          name="username"
          value={account.username}
          onChange={this.handleChange}
          error={this.state.errors.username}
        />
        <Input
          label="Password"
          name="password"
          value={account.password}
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