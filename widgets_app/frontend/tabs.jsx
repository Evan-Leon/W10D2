import React from 'react';

class Tabs extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            index: 0,
            title: "",
            content: ""
        }
    }


    render(){
        return (
            <ul>
                <h1 onClick="">{this.state.title} </h1> 
                <article>{this.state.content}</article>
            </ul>
        )
    }
}

export default Tabs;