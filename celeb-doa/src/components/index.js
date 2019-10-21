import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './Nav';
import SignUp from './SignUp';
import Login from './Login';
import Quiz from './Quiz';

const Body = () => {

    return(

        <div>
            <Nav/>

            <Route exact path='/' render={() => <Quiz />} /> {/* The Home page of the app */}

            <Route  path='/sign-up'  render={() => <SignUp  />} /> {/* The Sign Up page of the app */}

            <Route  path='/login' render={() => <Login  />} /> {/* The Login page of the App */}

        </div>

    )
}

export default Body;
