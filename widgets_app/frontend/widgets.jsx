import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import Clock from './clock';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    console.log(root);

    ReactDOM.render(<Root />, main);
});