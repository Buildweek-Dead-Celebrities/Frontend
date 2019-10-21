import React, {useState} from 'react';
import { registerUser } from '../actions';

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
        setRegister({...register, [e.target.name]: [e.target.value]})
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
                />
                <input
                    className='register'
                    type='password'
                    placeholder='Password'
                    value={register.password}
                    onChange={handleChange}
                />
                <button type='submit'>Sign Up</button>
            </form>
            
        </div>
    )
}

export default SignUp;