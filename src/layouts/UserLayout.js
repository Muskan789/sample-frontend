import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid,Paper,Avatar,Typography,Divider} from '@material-ui/core';
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
import Navbar from '../component/UserSection/Navbar'

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  content: {
    paddingLeft: '2rem',
  },
  drawer: {
    width: drawerWidth,
    height:'500px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    padding:'2rem'
  },
 
}));
  
export default function Blog(props) {
  const classes = useStyles();

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

  return (
    <div>
      <CssBaseline />
      <Navbar/>
      <Container maxWidth="lg">
        
        <Header1 title="Blog" menus={menus} />
        {/* <main>
        
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
        </main> */}

        {/* /////////////////////////// For Web////////////////////////////////// */}
    
        <Grid container spacing={2} className={classes.mainGrid}>
   <Paper
  className={classes.drawer}
  variant="permanent"
  classes={{
    paper: classes.drawerPaper,
  }}>
  <div className={classes.toolbar} >
  <Avatar alt="Person"  src="" /> <Typography style={{padding:'2%'}}  variant="h6" >Welcome</Typography>  </div>
  <Divider/>
  <UserSidebar user_routes={user_routes}  />
  </Paper>
        <main className={classes.content}>
          {switchRoutes}
           </main>
      </Grid>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    
 </div>
 );
}

