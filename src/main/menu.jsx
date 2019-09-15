import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import {emojify} from 'react-emojione';
import { DiGithubBadge } from 'react-icons/di';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginRight: theme.spacing(2),
    },
  }),
);

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#313853' }}>
        <Toolbar>
          <IconButton edge="start" href='https://www.facebook.com/groups/1024490957622648/' target='_Blank' className={classes.menuButton} color="inherit" aria-label="menu">
          <div>
            {emojify(':bird:')}
          </div>
          </IconButton>
          <Hidden mdDown>
            <Typography  variant="h6" className={classes.title} style={{ textAlign: 'left' }}>
              Lista de projetos - Jhony Lara
            </Typography>
          </Hidden>
            <Button color="inherit" href='https://www.facebook.com/jhonylar' target='_Blank'><FaFacebook size='2em'/></Button>
            <Button color="inherit" href='https://www.linkedin.com/in/jhonylara/' target='_Blank'><FaLinkedinIn size='2em'/></Button>
            <Button color="inherit" href='https://github.com/jhonylara' target='_Blank'><DiGithubBadge size='3em'/></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}