import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

//Parents: App

const NavBar = (props) => {

    return(
        <>
        <ul className="nav">
            <li>
            <NavLink className="person" to="/">Thomas Cantwell</NavLink>
            </li>
            <li>
            <NavLink className="navlink" to="/">Main</NavLink>
            </li>
            <li>
            <NavLink className="navlink" to="/projects">Projects</NavLink>
            </li>
            <li>
            <NavLink className="navlink" to="/resume">Resume</NavLink>
            </li>
            <li>
            <NavLink className="navlink" to="/blogs">Blogs</NavLink>
            </li>
        </ul>
        </>
    )
  };

export default connect()(NavBar)