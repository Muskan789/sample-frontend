import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../component/WebSection/Header';
import Footer from '../component/WebSection/Footer';
import Home from '../views/WebSection/Home';
import menus from '../menus';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

export default function Blog(props) {

  const switchRoutes = (
    <Switch>
      {menus.map((prop, key) => {
        if (prop.layout === "/web") {
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
      <Redirect from="/" to="/web/home" />
    </Switch>
  );
  
  
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" menus={menus} />
        <main>
         {/* <Home/> */}
         <Container maxWidth="lg" className={classes.container}>
          
          {switchRoutes}
         </Container>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    
 </div>
 );
}

