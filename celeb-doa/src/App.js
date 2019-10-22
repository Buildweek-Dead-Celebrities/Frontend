//React Stuff
import React from "react";
import { BrowserRouter as Router, Switch, Link, Route, withRouter } from "react-router-dom";
import Login from "./components/Login";
import SignUp from './components/SignUp';
import Body from "./components/index";
import PrivateLoginRoute from './components/PrivateLoginRoute';
import Dashboard from './components/Dashboard';
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" render={props =>{ return <Login {...props} />}} />
        <Route exact path="/sign-up" component={SignUp} />

        <PrivateLoginRoute exact path='/dashboard' component={Dashboard}/>
        <Body />
      </div>
    </Router>
  );
}

export default App;
