//React Stuff
import React from "react";
import { BrowserRouter as Router, Switch, Link, Route, withRouter } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import PrivateLoginRoute from './components/PrivateLoginRoute';
import Dashboard from './components/Dashboard';
import UpdateCelebrityList from "./components/UpdateCelebrityList";
import "./App.css";

import CelebrityList from "./components/CelebrityList";

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
        <Route exact path="/login" render={props =>{ return <Login {...props} />}} />
        <Route exact path="/sign-up" component={SignUp} />

        <PrivateLoginRoute exact path='/dashboard/' component={Dashboard}/>
      
        {/* Will need to make the CelebrityList path a protected route */}
        <Route path="/celebrity-list" component={CelebrityList} />
        <Route path="/update-celebrity/:id" component={UpdateCelebrityList}/>
      </div>
    </Router>
  );
}

export default App;
