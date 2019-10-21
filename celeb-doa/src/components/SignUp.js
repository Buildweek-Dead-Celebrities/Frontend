import React, {useState} from 'react';
import { registerUser } from '../actions';
import { connect } from 'react-redux';

const SignUp = (props) =>{

    const [register, setRegister] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = e =>{
        e.preventDefault();
        props.registerUser(register)
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
        <div>

            <form onSubmit={handleSubmit}>
                <input
                    className='register'
                    type='text'
                    placeholder='Username'
                    value={register.username}
                    onChange={handleChange}
                    name="username"
                />
                <input
                    className='register'
                    type='password'
                    placeholder='Password'
                    value={register.password}
                    onChange={handleChange}
                    name="password"
                />
                <button type='submit'>Sign Up</button>
            </form>
            
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
)(SignUp);