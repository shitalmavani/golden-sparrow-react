import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


const customStyles = makeStyles((theme) => ({
    drawer: {
        width: '100%',
        padding: '1em'
    },
    sectionHeader: {
        margin: '1em',
        color: 'grey',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const Nav = () => {
    const classes = customStyles();
    return (
        <Drawer
            className={ classes.drawer }
            variant='permanent'
            anchor='left'
        >
            <div className={classes.toolbar} />
            <Typography className={ classes.sectionHeader}>
                SETTINGS
            </Typography>
            <Divider />
            <List>
                <Link to='/settings/background'>
                    <ListItem button key='Background'>
                        <ListItemText primary='Background' />
                    </ListItem>
                </Link>
                <Link to='/settings/stats'>
                    <ListItem button key='Stats'>
                        <ListItemText primary='Stats' />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
)};

export default Nav;
