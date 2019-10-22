import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Body from "./components/index";
import CelebrityList from "./components/CelebrityList";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Body />
        {/* Will need to make the CelebrityList path a protected route */}
        <Route path="/celebrity-list" component={CelebrityList} />
      </div>
    </Router>
  );
}

export default App;
