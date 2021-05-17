import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useHistory,NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { menus, title } = props;
  const history = useHistory();

  const handleLogin =()=>{
    history.push("/login");
  }
  const handleAccount =()=>{
    history.push("/user");
  }

  return (
    <React.Fragment>
      {/* <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={handleAccount}>
         Account
        </Button>
        {/* <Button variant="outlined" size="small" onClick={handleLogin}>
          Login
        </Button> 
      </Toolbar> */}
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
       
        {menus.map((prop,key) => (
         
          <NavLink
           to={prop.layout + prop.path}
          // key={key}
          >
            <Link
            color="inherit"
            noWrap
            key={prop.title}
            variant="body2"
            className={classes.toolbarLink}
          >
           {prop.title}
          </Link>
            
          </NavLink>
          
        ))}
        
        
      
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
