import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid,Paper} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header1 from '../component/WebSection/Header1';
import Footer from '../component/WebSection/Footer';
import Home from '../views/WebSection/Home';
import menus from '../menus';
import user_routes from '../user_routes';
import Sidebar from '../component/WebSection/Sidebar';
import UserSidebar from '../component/UserSection/Sidebar';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };
  
export default function Blog(props) {

  const switchRoutes = (
    <Switch>
      {user_routes.map((prop, key) => {
        if (prop.layout === "/user") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              //key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/user" to="/user/profile" />
    </Switch>
  );
  
  
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header1 title="Blog" menus={menus} />
        <main>
        
          <Grid container spacing={2} className={classes.mainGrid}>
            <Grid item md={3}>
                <Paper>
            <UserSidebar
              user_routes={user_routes}
            />
            </Paper>
            </Grid>
            <Grid item md={8}>
            <Paper>
            {switchRoutes}</Paper>
            </Grid>
          </Grid>
        </main>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    
 </div>
 );
}

