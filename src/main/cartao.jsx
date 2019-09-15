import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DiGithubBadge } from 'react-icons/di';
import Grid from '@material-ui/core/Grid';
import Tecnologias from './tecnologias';

const useStyles = makeStyles({
  card: {
    marginTop: '20px',
    width: "70vh",
    maxWidth: 345,
    border: '2px solid #313853',
  },
  media: {
    height: 140,
  },
  content: {
    minHeight: "25vh",

  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const display = (props.linkLive === '' || props.linkLive === null) ? 'none' : 'block';
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.title}
        />
        <CardContent className={classes.content}>
          <div style={{ minHeight: '11vh' }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.titulo}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ fontWeight: '400', fontSize: '1.2em'}} >
              {props.conteudo}
            </Typography>
          </div>
          <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '2vh' }}>
            Tecnologias:
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            key={Math.random()}
          >
          <Tecnologias tecnologias={props.tecnologias} key={Math.random()} />
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  size="medium" color="primary" href={props.linkLive} target='_Blank' style={{display: display}}>
          Acessar 
        </Button>
        <Button  size="medium" color="primary" href={props.linkGit} target='_Blank'>
          Código <DiGithubBadge size='2em'/>
        </Button>
      </CardActions>
    </Card>
  );
}
