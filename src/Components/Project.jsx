import React from 'react';
import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux'

//Parents: ProjectContainer

const Project = (props) => {

    const handleClick = (e) => {
        console.log(props.project.image)
        // props.projectDispatch(props.project)
    }

    return (
        <>
        <div className="project-card">
            <a href={props.project.url}>
                <div className="project">
                    <img
                        src={props.project.image}
                        alt={props.project.title}
                        onClick={handleClick}
                    />
                    <h3>{props.project.title}</h3>
                </div>
            </a>
        </div>
        </>
    )
};

const chooseProject = (project) => {
    return {
        type: "CHOOSE_PROJECT",
        payload: project
    }
}

const mapDispatchToProps = {
    projectDispatch: chooseProject
}

export default connect(null, mapDispatchToProps)(Project);