import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PetsIcon from '@material-ui/icons/Pets';import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ThemeProvider } from '@material-ui/core/styles';
import {
  Link
} from "react-router-dom";

import theme from './theme'; 
import { CenterFocusStrong } from '@material-ui/icons';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Cuddlr {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  { title: "detailed pet profiles", text: "Get all the information you need before choosing your companion", image:"/images/profile.png"},
  { title: "personalized quiz", text: "A quiz that helps you make your decision in adopting the right pet", image: "/images/quiz.png"},
  { title: "support local shelters", text: "by adopting from one!", image: "/images/love.png"},

  ]
  
export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
       <ThemeProvider theme = {theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <PetsIcon className={classes.icon} />

          <Typography variant="h6" color="inherit" noWrap>
            Cuddlr
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
      
        <div className={classes.heroContent}> 
        {/* <Grid  sm={6}  >
        <CardMedia
                    className={classes.cardMedia}
                    image='cuddlr.png'
                    title="Image title"
                  />  </Grid>  */}
                           <Container maxWidth="xl">
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Match pets with good homes!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            A personalized pet-adoption website including detailed information about pets,   
            filters for the user to customize from, and an easier way for shelters to post available animals for adoption

            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                <Button component={Link} to="/login" variant="contained" color="primary" size = "large">
                  Login
                </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" size = "large">
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl" >
           {/* End hero unit */}
           <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                    </Typography>
                    <Typography>
                    {card.text}         </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
  
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Made with love by Sneha :) for stella (best dog ever) @ codeday labs 2021
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
  </ThemeProvider>
    </React.Fragment>
  );
}
