import React from 'react';
import Clock from './clock';

const Root = (props) => {
    return (
        <div className="root">
            <h1 className="clockheader">Clock:</h1>
            < Clock />
            <h1 className="weatherheader">Weather</h1>
        </div>
    )
}

export default Root;