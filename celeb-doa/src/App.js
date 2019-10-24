//React Stuff
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  withRouter
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import Quiz from "./components/Quiz";
import Time from "./components/Time";
import PrivateLoginRoute from "./components/PrivateLoginRoute";
import Dashboard from "./components/Dashboard";
import UpdateCelebrityList from "./components/UpdateCelebrityList";

import "./App.css";

import CelebrityList from "./components/CelebrityList";

function App() {
  const [count, setCount] = useState(50);

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="pink">
          <Route
            exact
            path="/quiz"
            render={() => <Time count={setCount} countDown={count} />}
          />
          <Route
            exact
            path="/quiz"
            render={() => <Quiz count={count} setCount={setCount} />}
          />{" "}
          {/* The Home page of the app */}
        </div>
        <Route exact path="/sign-up" component={SignUp} />
        {/* The Login page of the App */}
        <Route
          exact
          path="/login"
          render={props => {
            return <Login {...props} />;
          }}
        />
        <PrivateLoginRoute exact path="/dashboard" component={Dashboard} />
        <PrivateLoginRoute path="/celebrity-list" component={CelebrityList} />
        <PrivateLoginRoute
          path="/update-celebrity/:id"
          component={UpdateCelebrityList}
        />
      </div>
    </Router>
  );
}

export default App;
