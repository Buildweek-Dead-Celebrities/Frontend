import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./components/Login";

import './App.css';

import Body from './components/index';

function App() {
  return (
    <div className="App">
    <Body/>
     </div>
  );
}

export default App;
