import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from './components/SignUp';
import Body from "./components/index";
import Time from './components/Time';

import "./App.css";



function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Body />
        <Route  path='/' component={Time} />
      </div>
    </Router>
  );
}

export default App;
