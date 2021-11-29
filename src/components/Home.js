import '../styles/Home.css'
import React, { Component } from 'react';
import axios from 'axios';
import Clock from './Clock';
import OpsPanel from './OpsPanel';
import { ENDPOINT } from '../constants';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    setUserData = (data) => {
        this.setState({ user: data });
    }

    componentDidMount() {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('gs-token')
            }
        }

        axios.get(ENDPOINT + '/event', config)
        .then(
            response => {
                var user = response.data;
                if (response.data.refresh_token != null) {
                    localStorage.setItem('gs-token', response.data.refresh_token)
                }
                this.setState({ user: user });
        });
    }

    render() {
        return (
            <div>
                <div className='home-page-bg'></div>
                <div className='tint-overlay'></div>
                <div className='home-page'>
                    <OpsPanel sparrows={ this.state.user.vcCurrent } totalDonated={ this.state.user.vcDonatedAllTime } setUserData={ this.setUserData }/>
                    <div className='center-div'>
                        <Clock/>
                        <span className='welcome-message'>
                            Rise and Shine, { this.state.user.name }!
                        </span>
                    </div>
                    {/* <Logout /> */}
                </div>
            </div>
        )
    }
}

export default Home;
