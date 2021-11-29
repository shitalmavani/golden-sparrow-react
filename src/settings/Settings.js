import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Nav from './Nav';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import logo from '../logos/gs-final.svg';
import './Settings.css'

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#FFD700',
        },
        secondary: {
          main: '#ff3d00',
        },
      },
});

const customStyles = makeStyles((theme) => ({
    appbar: {
        zIndex: theme.zIndex.drawer + 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        padding: 'auto',
        color: 'white',
        fontSize: '1.5em',
        margin: '0.6em'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    settingsArea: {
        positions: 'absolute',
        height: 'auto',
        width: '100%',
    },
    closeBtn: {
        color: 'white',
        fontSize: '1.5em',
    }
}));

const Settings = () => {
    const classes = customStyles();
    const history = useHistory();

    const handleClose = () => {
        history.push('/');
    }

    return (
        <div className='settings-page'>
            <ThemeProvider theme={theme}>
                <AppBar className={ classes.appbar }>
                    <img src={logo} style={{marginLeft: '2em', color: 'white',height:'2.5em'}} alt="logo" />
                    {/* <Typography className={ classes.title }>
                        Settings
                    </Typography> */}
                    <Toolbar container className={ classes.toolbar }>
                        <IconButton
                            onClick={ handleClose }
                        >
                            <CloseIcon
                                className={classes.closeBtn}
                            />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={ classes.toolbar } />
                <div className={classes.settingsArea}>
                    <Nav />
                </div>
            </ThemeProvider>
        </div>
    )
};

export default Settings;
