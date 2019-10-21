import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


const Nav = () =>{

    return(
        <div>

            <div>
                <h1>Celebrity?</h1>
                <h3>Dead or Alive</h3>
            </div>
            
            <div>
                <NavLink to='/'>Quiz</NavLink>
                <NavLink to='/sign-up'>Sing Up</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </div>
            
        </div>

    )
}

export default Nav;