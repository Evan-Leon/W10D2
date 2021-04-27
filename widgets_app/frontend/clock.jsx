import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
        this.tick = this.tick.bind(this);
        
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.tick()
        , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        this.intervalId = 0;
    }

    tick() {
        this.setState({
            time: this.state.time = new Date(),
        })
    }

    render() {
        return (
            <div>
                <h2>HERE IS THE TIME YALL::   
                    {this.state.time.getHours()}: 
                    {this.state.time.getMinutes()}:
                    {this.state.time.getSeconds()}. 
                </h2>
            </div>
        )
    }
}

export default Clock;