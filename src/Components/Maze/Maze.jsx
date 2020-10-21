import React from 'react';
import Row from './Row'

import {connect} from 'react-redux'

//Parents: App

const Maze = (props) => {

    const handleClick = (e) => {
        console.log(props)
    }

    const maze2DArray = props.maze.map((row) => {

        return <Row
        key={row.id}
        row={row}
        />
    })

    return (
        <>
        <div className="perspective">
            {maze2DArray}
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

let mapStateToProps = (reduxState) => {
    return {
      maze: reduxState.maze
    }
}

const mapDispatchToProps = {
    mazeDispatch: targetMarble
}

export default connect(mapStateToProps, mapDispatchToProps)(Maze);