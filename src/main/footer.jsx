import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Emojify from 'react-emojione';

const useStyles = makeStyles(theme => ({
    footer: {
      padding: theme.spacing(6),
      marginTop: '20vh',
      backgroundColor: '#313853',
      color: '#00F260',
      textShadow: '2px 2px #331b1b',
    },
  }));


export default function Menu() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography letterSpacing={6} variant="h6" align="center" gutterBottom>
                Feito com muita persistência!  <Emojify style={{height: 30, width: 30}}><span aria-label="nerd" role="img">🤓</span></Emojify>
            </Typography>
            <Typography variant="subtitle2" align="center" component="p">
                Tecnologias usadas nesse site: React, Material.ui, Emojione
            </Typography>
            <Typography variant="subtitle2" align="center" component="p">
                Site sem fins lucrativos, providenciando direitos autorais para as imagens usadas.
            </Typography>
        </footer>
    );
}