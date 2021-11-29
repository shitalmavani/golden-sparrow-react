import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';

const customStyles = makeStyles((theme) => ({
    drawer: {
        width: '20%',
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
                <ListItem button key='Background'>
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary='Background' />
                </ListItem>
            </List>
        </Drawer>
)};

export default Nav;
