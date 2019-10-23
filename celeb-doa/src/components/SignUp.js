import React, {useState} from 'react';
import { registerUser } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

const SignUp = (props) =>{



    const [register, setRegister] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = e =>{
        e.preventDefault();
        props.registerUser(register).then(()=> props.history.push('/login'))
        setRegister({
            username: '',
            password: ''
        })
    }

    const handleChange = e =>{
        console.log(e.target.value)
        setRegister({...register, [e.target.name]: e.target.value})
    }


    return(
        <div className='pink'>

            <div className='form'>

                <h2 className='sign-up' >Sign Up</h2>

                <form  className='sign-up-form' onSubmit={handleSubmit}>
                    <input
                        className='sign-up-input'
                        type='text'
                        placeholder='Username'
                        value={register.username}
                        onChange={handleChange}
                        name="username"
                    />

                    <br/>

                    <input
                        className='sign-up-input'
                        type='password'
                        placeholder='Password'
                        value={register.password}
                        onChange={handleChange}
                        name="password"
                    />

                    <br/>

                    <button type='submit' className='sign-up-btn'>Submit</button>
                </form>

            </div>

            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        registerData: state.registerData
    }
}


export default connect(
    mapStateToProps, 
    {registerUser}
)(withRouter(SignUp));