import React from 'react';
import Cell from './Cell'

import {connect} from 'react-redux'

//Parents: App

const Maze = (props) => {

    const handleClick = (e) => {
        console.log(props)
    }

    const rowArray = props.row.map((cell) => {

        return <Cell
        key={cell.id}
        cell={cell}
        />
    })

    return (
        <>
        <div className="row">
            {rowArray}
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