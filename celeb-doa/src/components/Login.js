import React, { useState } from "react";
import { loginUser } from "../actions";
import { connect } from "react-redux";


const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginUser(login);
    //  props.history.push('/')
    setLogin({ username: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="loginForm"
          type="text"
          name="username"
          placeholder="name"
          value={login.username}
          onChange={handleChange}
        />
        <input className="loginForm" 
        type="password" 
        name="password" 
        value={login.password} 
        onChange={handleChange} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        loginData: state.loginData
    };
};

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
