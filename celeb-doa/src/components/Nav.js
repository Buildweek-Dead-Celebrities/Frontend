import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


const Nav = () =>{

    const NavDiv = styled.div`
        background: #AC3C3C
    `
    const LinkDiv =styled.div`
        display: flex;
        width: 48%;
        justify-content: space-evenly;
    `

    const Center = styled.div`
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    

    return(
        <NavDiv>

            <Center>

            <div>
                <h1 className='title'>Celebrity?</h1>
                <h3 className='title'>Dead or Alive</h3>
            </div>
            
            <LinkDiv>
                <NavLink className='link' to='/'>Quiz</NavLink>
                <NavLink className='link' to='/sign-up'>Sing Up</NavLink>
                <NavLink className='link' to='/login'>Login</NavLink>
            </LinkDiv>
            </Center>
            
        </NavDiv>

    )
}

export default Nav;