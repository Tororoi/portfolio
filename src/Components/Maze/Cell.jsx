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
        <div className="cube">
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