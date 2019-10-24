import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {

    const GameButton = styled.button`
        font-family: 'Pacifico', cursive;
        color: white;
        background-color: #AC3C3C;
        display: inline-block;
        font-size: 3.3rem;
        padding: 36px 94px;
        border-radius: 50px;
        margin-top: 3%;
        border: none;
        transition: 0.4s ease-in-out;

        :hover{
            color: #AC3C3C;
            background-color: white;
        }
    `

    const MainTitle = styled.h2`
        font-family: 'Fascinate Inline', cursive;
        color: white;
        font-size: 6rem;
    `

    return(
        <div>
            <h1 className='title'>Welcome</h1>
            <h1 className='title'>To</h1>
            <div>
                <MainTitle >Celebrity?</MainTitle>
                <MainTitle >Dead or Alive</MainTitle>
            </div>

            <div>
                <NavLink to='/quiz'>
                    <GameButton>Play The Game</GameButton>
                </NavLink>
            </div>
        </div>

    )
}

export default Home;