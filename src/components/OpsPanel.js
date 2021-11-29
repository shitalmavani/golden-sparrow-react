import '../styles/OpsPanel.css';

import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import SparrowDisplay from './SparrowDisplay';
import DropdownMenu from './DropdownMenu';


function OpsPanel(props) {
    return (
        <div className='ops-panel'>
            <Toolbar className='tool-bar'>
                <SparrowDisplay sparrows={ props.sparrows } totalDonated={ props.totalDonated } setUserData={ props.setUserData }/>
                <DropdownMenu />
            </Toolbar>
        </div>
    )
}

export default OpsPanel;
