import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

const Nav = (props) =>{


    const logout = () => { {/* This is the logout func. removes token/message and pushes to /login. -b */}
    localStorage.removeItem('token')
    localStorage.removeItem('message')
    props.history.push('/login')
    }

    {/* Terinary below: (Is this thing true ? Do this : Do that) 
        ? = If so do 'this'
        : = If not do 'that'

    - Checks for Token
    - If 'token', displays : [Quiz] [Dashboard] [Logout] (Don't need to SignUp if you already have an Account) 
    - If new user or logged out, displays: [Quiz] [SignUp] [Login] (Dashboard/Logout dont need to be displayed if not logged in)
    */}
   
    return(
  localStorage.getItem('token') ?
                <div className="navColor"> {/* all i did was add a className to add color to the nav aha, feel free to change! its in app.css. -b*/}

                  <div>
                      <h1>Celebrity?</h1>  
                      <h3>Dead or Alive</h3>
                  </div>
                        
                  <div>
                     <NavLink to='/'>Quiz</NavLink>
                     <NavLink to='/dashboard'>Dashboard</NavLink>
                     <button onClick={()=> logout()}>Logout</button>{/* If user is signed in, a Logout Button will appear to Logout. Button was the only thing I could get to work? idk -b*/}
                  </div>
                </div>
                    : 
                 <div className="navColor">
                 <div>
                     <h1>Celebrity?</h1>
                     <h3>Dead or Alive</h3>
                 </div>
                 <div>
                    <NavLink to='/'>Quiz</NavLink>
                    <NavLink to='/sign-up'>Sign Up</NavLink> {/* If user is Logged in, SignUp dissappears and gets replaced w/ dashboard. -b*/}
                    <NavLink to='/login'>Login</NavLink>
                 </div>
                 </div>
                        )
}

export default withRouter(Nav);