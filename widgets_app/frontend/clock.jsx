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
                <div className="timedate">
                    <div className="time">
                        <h1 className="clock_header">Time:</h1>
                        <h2 className="clock">  
                            {this.state.time.getHours()}: 
                            {this.state.time.getMinutes()}:
                            {this.state.time.getSeconds()} EST 
                        </h2>
                    </div>
                    <div className="calendar">
                        <h1 className="dateheader">Date:</h1>
                        <h2 className="date">{this.state.time.toDateString()}</h2>
                    </div>
                </div>
        )
    }
}

export default Clock;