import React from 'react';
import Cell from './Cell'

import {connect} from 'react-redux'

//Parents: App

const Maze = (props) => {

    const handleClick = (e) => {
        console.log(props)
    }

    return (
        <>
        <div className="cube" style={props.cell.color === "transparent" ? {'--colorPrimary-a': "0"} : {}}>
            <div class="top"></div>
            <div class="left"></div>
            <div class="right"></div>
        </div>
        </>
    )
};

const targetMarble = (coords) => {
    return {
        type: "TARGET_MARBLE",
        payload: coords
    }
}

const mapDispatchToProps = {
    mazeDispatch: targetMarble
}

export default connect(null, mapDispatchToProps)(Maze);