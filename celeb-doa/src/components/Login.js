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
    <div className='pink'>

      <div className='form'>

        <h2 className='login'>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="loginForm"
            type="text"
            name="username"
            placeholder="Name"
            value={login.username}
            onChange={handleChange}
          />

          <br/>

          <input 
            className="loginForm" 
            type="password" 
            name="password" 
            placeholder='Password'
            value={login.password} 
            onChange={handleChange} 
          />

          <br/>

          <button type="submit" className='login-btn'>Submit</button>
        </form>

      </div>

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
