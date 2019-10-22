import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import Quiz from './components/Quiz';
// import Body from "./components/index";
import Time from './components/Time';

import "./App.css";



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route exact path='/' render={() => <Quiz />} /> {/* The Home page of the app */}

        <Route path="/login" component={Login} /> {/* The Sign Up page of the app */}

        <Route path="/sign-up" component={SignUp} />{/* The Login page of the App */}

        <Route exact path='/' component={Time} />
      </div>
    </Router>
  );
}

export default App;
