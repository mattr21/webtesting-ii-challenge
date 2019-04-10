import React from 'react';

const Display = props => {
    return (
        <>
            <div>Balls: {props.balls}</div>
            <div>Strikes: {props.strikes}</div>
        </>
    )
}

export default Display;