import React from 'react';
import logo from '../logos/gs-final.svg';
import '../styles/SparrowDisplay.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ENDPOINT } from '../constants';


const SparrowDisplay = (props) => {
    const [anchorElement, setAnchorEl] = React.useState(null);
    var open = Boolean(anchorElement);
    const history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        open = false;
    };

    const handleDonate = () => {
        let config = {
            headers: {
                "Authorization": localStorage.getItem('gs-token')
            }
        }
        axios.get(ENDPOINT + "/donate", config)
        .then(
            response => {
                props.setUserData(response.data);
                if (response.data.refresh_token != null) {
                    localStorage.setItem('gs-token', response.data.refresh_token)
                }
                handleClose();
                history.push("/");
            }
        )
    }

    return (
        <div className='sparrow-display'>
            <span className='sparrow-count' onClick={ handleClick }>
                { props.sparrows }
            </span>
            <img src={ logo } className='logo' alt="logo" onClick={ handleClick }/>
            <Menu 
                anchorEl={ anchorElement }
                keepMounted
                open={ open }
                onClose={ handleClose }
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                PaperProps={{
                    style: {
                        background: 'rgba(0,0,0,0.35)',
                        width: '10%'
                    }
                }}
            >
                <MenuItem key='donate' onClick={ handleDonate } style={{ color: 'white' }}>
                    Donate
                </MenuItem>
                <MenuItem key='total' style={{ color: 'white' }}>
                    Total Donated:<br/>
                    { props.totalDonated }
                </MenuItem>
            </Menu>
        </div>
    )
}

export default SparrowDisplay;
