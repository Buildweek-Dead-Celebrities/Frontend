import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () =>{

    return(
        <div>
            
            <div>
                <NavLink to='/'>Quiz</NavLink>
                <NavLink to='/sign-up'>Sing Up</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </div>
            
        </div>

    )
}

export default Nav;