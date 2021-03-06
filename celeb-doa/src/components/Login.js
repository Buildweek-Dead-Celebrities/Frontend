import React, { useState } from "react";
import { loginUser } from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";



const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginUser(login).then(()=> props.history.push('/dashboard'))
    //  props.history.push('/dashboard')
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
)(withRouter(Login));

// import React, { useState } from "react";
// import { loginUser } from "../actions";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import useForm from "react-hook-form";

// const Login = props => {
//   const [login, setLogin] = useState({ username: "", password: "" });
//   const { register, handleSubmit, errors } = useForm();

//   const handleChange = event => {
//     setLogin({ ...login, [event.target.name]: event.target.value });
//   };

//   const onSubmit = event => {
//     props.loginUser(login).then(() => props.history.puimport React, { useState } from "react";
// import { loginUser } from "../actions";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import useForm from "react-hook-form";

// const Login = props => {
//   const [login, setLogin] = useState({ username: "", password: "" });
//   const { register, handleSubmit, errors } = useForm();

//   const handleChange = event => {
//     setLogin({ ...login, [event.target.name]: event.target.value });
//   };

//   const onSubmit = event => {
//     props.loginUser(login).then(() => props.history.push("/dashboard"));
//     //  props.history.push('/dashboard')
//     setLogin({ username: "", password: "" });
//   };

//   return (
//     <div className="pink">
//       <div className="form">
//         <h2 className="login">Login</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           {errors.username && "Username must be more than 6 characters"}
//           <input
//             className="loginForm"
//             type="text"
//             name="username"
//             autoComplete="off"
//             ref={register({ required: true, minLength: 6})}
//             placeholder="Name"
//             value={login.username}
//             onChange={handleChange}
//           />

//           <br />
//           {errors.username && "Password must be more than 8 characters"}
//           <input
//             className="loginForm"
//             type="password"
//             name="password"
//             autoComplete="off"
//             ref={register({ required: true, minLength: 8 })}
//             placeholder="Password"
//             value={login.password}
//             onChange={handleChange}
//           />

//           <br />

//           <button type="submit" className="login-btn">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     loginData: state.loginData
//   };
// };

// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(withRouter(Login));

//     //  props.history.push('/dashboard')import React, { useState } from "react";
// import { loginUser } from "../actions";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import useForm from "react-hook-form";

// const Login = props => {
//   const [login, setLogin] = useState({ username: "", password: "" });
//   const { register, handleSubmit, errors } = useForm();

//   const handleChange = event => {
//     setLogin({ ...login, [event.target.name]: event.target.value });
//   };

//   const onSubmit = event => {
//     props.loginUser(login).then(() => props.history.push("/dashboard"));
//     //  props.history.push('/dashboard')
//     setLogin({ username: "", password: "" });
//   };

//   return (
//     <div className="pink">
//       <div className="form">
//         <h2 className="login">Login</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           {errors.username && "Username must be more than 6 characters"}
//           <input
//             className="loginForm"
//             type="text"
//             name="username"
//             autoComplete="off"
//             ref={register({ required: true, minLength: 6})}
//             placeholder="Name"
//             value={login.username}
//             onChange={handleChange}
//           />

//           <br />
//           {errors.username && "Password must be more than 8 characters"}
//           <input
//             className="loginForm"
//             type="password"
//             name="password"
//             autoComplete="off"
//             ref={register({ required: true, minLength: 8 })}
//             placeholder="Password"
//             value={login.password}
//             onChange={handleChange}
//           />

//           <br />

//           <button type="submit" className="login-btn">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     loginData: state.loginData
//   };
// };

// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(withRouter(Login));

//     setLogin({ username: "", password: "" });import React, { useState } from "react";
// import { loginUser } from "../actions";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import useForm from "react-hook-form";

// const Login = props => {
//   const [login, setLogin] = useState({ username: "", password: "" });
//   const { register, handleSubmit, errors } = useForm();

//   const handleChange = event => {
//     setLogin({ ...login, [event.target.name]: event.target.value });
//   };

//   const onSubmit = event => {
//     props.loginUser(login).then(() => props.history.push("/dashboard"));
//     //  props.history.push('/dashboard')
//     setLogin({ username: "", password: "" });
//   };

//   return (
//     <div className="pink">
//       <div className="form">
//         <h2 className="login">Login</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           {errors.username && "Username must be more than 6 characters"}
//           <input
//             className="loginForm"
//             type="text"
//             name="username"
//             autoComplete="off"
//             ref={register({ required: true, minLength: 6})}
//             placeholder="Name"
//             value={login.username}
//             onChange={handleChange}
//           />

//           <br />
//           {errors.username && "Password must be more than 8 characters"}
//           <input
//             className="loginForm"
//             type="password"
//             name="password"
//             autoComplete="off"
//             ref={register({ required: true, minLength: 8 })}
//             placeholder="Password"
//             value={login.password}
//             onChange={handleChange}
//           />

//           <br />

//           <button type="submit" className="login-btn">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     loginData: state.loginData
//   };
// };

// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(withRouter(Login));

//   };

//   return (
//     <div className="pink">
//       <div className="form">
//         <h2 className="login">Login</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           {errors.username && "Username must be more than 6 characters"}
//           <input
//             className="loginForm"
//             type="text"
//             name="username"
//             autoComplete="off"
//             ref={register({ required: true, minLength: 6})}
//             placeholder="Name"
//             value={login.username}
//             onChange={handleChange}
//           />

//           <br />
//           {errors.username && "Password must be more than 8 characters"}
//           <input
//             className="loginForm"
//             type="password"
//             name="password"
//             autoComplete="off"
//             ref={register({ required: true, minLength: 8 })}
//             placeholder="Password"
//             value={login.password}
//             onChange={handleChange}
//           />

//           <br />

//           <button type="submit" className="login-btn">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     loginData: state.loginData
//   };
// };

// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(withRouter(Login));
