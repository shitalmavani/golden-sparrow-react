import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { clientId } from '../constants';

import '../styles/Menu.css';

function Logout() {
    const history = useHistory();
    const onSuccess = () => {
        console.log('[Logout Successful]');
        localStorage.removeItem('gs-token');
        history.push('/');
    }
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                render={renderProps => (
                    <span onClick={renderProps.onClick} style={{color: 'white'}}>Logout</span>
                )}
                buttonText="Logout"
                icon="disabled"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;
