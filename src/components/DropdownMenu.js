import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Logout from './Logout';


const customStyles = makeStyles({
    menuIcon: {
        color: 'white',
    }
});


const DropdownMenu = () => {
    const classes = customStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                className='menu-icon-btn'
                onClick={ handleClick }
            >
                <MoreVertIcon 
                    className={classes.menuIcon}
                />
            </IconButton>
            <Menu 
                anchorEl={ anchorEl }
                keepMounted
                open={ open }
                onClose={ handleClose }
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                PaperProps={{
                    style: {
                        background: 'rgba(0,0,0,0.35)'
                    }
                }}
            >
                <Link to='/settings' style={{color: 'white', textDecoration: 'none'}}>
                    <MenuItem key='settings' onClick={handleClose}>
                        Settings
                    </MenuItem>
                </Link>
                <MenuItem key='logout' onClick={handleClose}>
                    <Logout />
                </MenuItem>
            </Menu>
        </div>
    );
};

export default DropdownMenu;
