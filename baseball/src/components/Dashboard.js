import React from 'react';

const Dashboard = props => {   
    return (
        <>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.ball}>Ball</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.hit}>Hit</button>
        </>
    )
}

export default Dashboard;