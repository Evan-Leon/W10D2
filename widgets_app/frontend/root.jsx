import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const Root = (props) => {
    return (
        <div className="root">
            <h1 className="clockheader">Clock</h1>
            < Clock />
            <h1 className="weatherheader">Weather</h1>

            <h1>Tabs</h1>
            < Tabs />
        </div>
    )
}

export default Root;