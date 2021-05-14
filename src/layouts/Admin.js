import React,  { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

import {  makeStyles, useTheme  } from '@material-ui/core/styles';

import {Drawer,Accordion,AccordionSummary,AccordionDetails,Hidden,List,
        
        Paper ,
        Typography,
        Toolbar,
        CssBaseline,
        AppBar,
        Grid,
        Container,
        Link,
        Divider,
        Button,

        } from '@material-ui/core';
        import ListItem from '@material-ui/core/ListItem';
        import ListItemIcon from '@material-ui/core/ListItemIcon';
        import ListItemText from '@material-ui/core/ListItemText';
        import ListSubheader from '@material-ui/core/ListSubheader';
        import DashboardIcon from '@material-ui/icons/Dashboard';
        import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
        import PeopleIcon from '@material-ui/icons/People';
        import BarChartIcon from '@material-ui/icons/BarChart';
        import LayersIcon from '@material-ui/icons/Layers';
        import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuIcon from '@material-ui/icons/Menu';

import IconButton from '@material-ui/core/IconButton';

import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
//import User_MainList from './User_MainList';
import Linechart from '../component/Charts/Linechart';
import AdminSidebar from '../component/AdminSection/Sidebar';
import routes from "../routes";


///////////////////////////////////////////////////////////

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  root1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
     minHeight: 'fit-content',
     marginTop:20
  },
  title:{
    flexGrow: 1,
    textAlign:'center',
    marginTop:'1%',
    color:'#1e83a9',
  },

  appBar: {
    backgroundColor:'white',
     //backgroundColor:'#1e83a9',
    //  backgroundColor:'#f5f5f5',
   zIndex: theme.zIndex.drawer + 1,
   opacity: '1',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,

  menuButton: {
    marginRight: theme.spacing(2),
    color:'#1e83a9',
  },
  grow: {
    flexGrow: 1,
  },
  container:{
 marginTop:'4rem'
  },

  notification: {
  display: 'flex',
  },
  image: {
    width: '84%',
    marginTop: '2%',
   // marginRight: '50%',
   // marginBottom:'6%',
  },
  paper:{
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 280,
    marginTop:'3rem'
  }
  
  
  

}));



/////////////////////////////////////////////////////////////////////////////////

export default function Admin(props) {
    const { container } = props;

    const classes = useStyles();
    const theme = useTheme();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
      const [mobileOpen, setMobileOpen] = React.useState(false);
                  const [onn, setOnn] = React.useState(false);
                
                  const handleOff = () => {
                    setOnn(false);
                  }; 
                  const [open, setOpen] = React.useState(false);

                  const [up, setUp] = React.useState(false);

                  const handleTooltipClose = () => {
                    setUp(false);
                  };
                
                  const handleTooltipOpen = () => {
                    setUp(true);
                  };

  ////////////////////////////////////////////////////////////////////////
  const drawer = (
    <div className={classes.root1}>

   <Typography  variant="h6" >Welcome</Typography>
    {/* <Avatar alt="Person" className={classes.avatar}  src="" />
      <Link href="/Dashboard">
            <img style={{width:100, height:100, alignItems:'center'}} src="./images/logo.png" />
            </Link>      */}
     <AdminSidebar routes={routes}  />
     
    </div>
  );

  const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
    </Switch>
  );

 
  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>

        <Grid container spacing={3}>

          <Grid item xs={2} sm={2} md={2}>

          <Hidden smDown implementation="css">
           dfg
         </Hidden>

        <Hidden mdUp implementation="css">
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          </Hidden>

        </Grid>

         <Grid item xs={7} sm={4} md={8}>
        
          <Typography variant="h6" noWrap className={classes.title}>
              Sample Project
          </Typography>
         
         
          </Grid>


           <div className={classes.grow} />
           <Grid item xs={1} sm={4} md={2}>
          <div className={classes.notification}>
          <Tooltip disableFocusListener title="Change your Site">
             <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
         jhj
          </IconButton> 
          </Tooltip>
           
         
           
          
            
            {/* <Tooltip disableFocusListener title="Logout">
           <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              nk
            </IconButton>
          </Tooltip> */}

          <Grid container spacing={2}>

<Grid item>
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          title="Add"
        >
          <Button onClick={handleTooltipOpen}></Button>
        </Tooltip>
      </div>
    </ClickAwayListener>
  </Grid>

  </Grid>

          </div>
          </Grid>

           </Grid>

        </Toolbar>
      </AppBar>


     {/* /////////////////////////// For Web////////////////////////////////// */}
     <Hidden smDown implementation="css">

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />

         {drawer}


      </Drawer>
    </Hidden>

 {/* ///////////////////////////// For Mobile //////////////////////////////// */}

        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>


        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          
         {switchRoutes}
        </Container>
      </main>
    </div>
  );
}


Admin.propTypes = {
    container: PropTypes.any,
  };