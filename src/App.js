import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import ProjectContainer from './Components/ProjectContainer'
import Resume from './Components/Resume'
import BlogContainer from './Components/BlogContainer'

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
          <div className="navbar">
            <NavBar/>
          </div>
          <header className="App-header">
            <img src={'./blackburnian.png'} className="App-logo" alt="logo" />
            <p>
              Welcome to Thomas Cantwell's Portfolio
            </p>
          </header>
          <main>
            <Route path="/projects" exact render={() =>
             <ProjectContainer/>
            } />
            <Route path="/resume" exact render={() =>
             <Resume/>
            } />
            <Route path="/blogs" exact render={() =>
             <BlogContainer/>
            } />
           <Route path="/" exact render={() =>
             <ProjectContainer/>
             <BlogContainer/>
            } />
          </main>
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
