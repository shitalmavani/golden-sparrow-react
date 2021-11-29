import '../styles/Clock.css';
import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            time: new Date(),
        });
    }

    getTime = () => {
        var hours = this.state.time.getHours();
        var minutes = this.state.time.getMinutes();
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes
        return strTime;
    }

    render() {
        return (
            <div className="clock">
                <span>
                {this.getTime()} 
                </span>
            </div>
        )
    }
}

export default Clock;
