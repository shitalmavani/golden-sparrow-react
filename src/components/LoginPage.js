import React from 'react';
import Login from './Login';
import logoGold from '../logos/gs-final-gold.svg';
import Toolbar from '@material-ui/core/Toolbar';
import '../styles/LoginPage.css';

const LoginPage = (props) => {
    return (
        <div className="login-page">
            <div className='logo-panel'>
                <img src={ logoGold } className='logo-gold' alt="logo" />
            </div>
            <div className='login-panel'>
                <Toolbar className='login-header'>
                    <h1 className='title'>
                        golden sparrow project
                    </h1>
                </Toolbar>
                <Login setToken={ props.setToken }/>
            </div>
        </div>
    )
};

export default LoginPage;
