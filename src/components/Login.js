import '../styles/Login.css';
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { ENDPOINT, clientId } from '../constants';


const loginUrl = ENDPOINT + '/login';

function Login({ setToken }) {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        console.log(res.tokenId);
        axios.post(loginUrl, {
            id_token: res.tokenId
          })
          .then(function (response) {
            localStorage.setItem('gs-token', response.data.access_token);
            setToken(response.data.access_token);
        });
    }

    const onFailure = (res) => {
        console.log('[Login Failed] result:', res);
    }

    const testSuccess = () => {
        axios.get(ENDPOINT + "/test_user_login")
          .then(function (response) {
            localStorage.setItem('gs-token', response.data.access_token);
            setToken(response.data.access_token);
        });
    }

    return (
        // <GoogleLogin
        //     clientId={clientId}
        //     buttonText="Login with Google"
        //     onSuccess={onSuccess}
        //     onFailure={onFailure}
        //     cookiePolicy={'single_host_origin'}
        //     isSignedIn={false}
        //     className='google-btn'
        // />

        <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={testSuccess}
            onFailure={testSuccess}
            cookiePolicy={'single_host_origin'}
            isSignedIn={false}
            className='google-btn'
        />
    )
}

export default Login;
