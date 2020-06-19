import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'

import {connect} from 'react-redux'

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  withRouter
} from "react-router-dom";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Router>
          <NavBar/>
        <header className="App-header">
          <img src={'./blackburnian.png'} className="App-logo" alt="logo" />
          <p>
            Welcome to Thomas Cantwell's Portfolio
          </p>
        </header>
        </Router>
      </div>
    );
  }
}

let toggleNight = (boolean) => {
  return {
    type: "TOGGLE_NIGHT",
    payload: boolean
  }
}

let sendThisInformation = {
  toggleNight
}

export default withRouter(
  connect(null, sendThisInformation)(App)
);
