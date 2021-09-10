import React, { Component } from "react";
import {Row, Image, Container, Col, Button} from 'react-bootstrap';
import stella from './stella.jpg'; 

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import View from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} maxWidth= '100px'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = {props.image}
          title="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align = 'center'>
            {props.title} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <View size="small" color="primary" component={Link} to="/pet-view">
          View More
        </View>
        <View size="small" color="primary">
          Adopt
        </View>
      </CardActions>
    </Card>
  );
}
