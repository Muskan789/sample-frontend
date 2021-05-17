import React from 'react';
import {ListItem,List,Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link, NavLink } from "react-router-dom";

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
link: {
  position: "relative",
  display: "block",
  textDecoration: "none",
  "&:hover,&:focus,&:visited,&": {
    color: 'black'
  }
},
itemLink: {
  width: "auto",
  transition: "all 300ms linear",
  margin: "10px 15px 0",
  borderRadius: "3px",
  position: "relative",
  display: "flex",
  padding: "10px 15px",
  backgroundColor: "transparent",
  
},
itemIcon: {
  width: "24px",
  height: "30px",
  fontSize: "24px",
  lineHeight: "30px",
  float: "left",
  marginRight: "15px",
  textAlign: "center",
  verticalAlign: "middle",
  //color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
  color:'#972C26'
},
}));

export default function UserSidebar(props){
  const classes = useStyles()

    const { user_routes } = props;
    return(
<div>
<List component="nav">
      {user_routes.map((prop, key) => {
          return (
            <Link
              to={prop.layout + prop.path}
              key={key}
              className={classes.link}
            >
    <ListItem button  className={classes.itemLink}>
    {typeof prop.icon === "string" ? (
      <ListItemIcon className={classes.itemIcon}>
        {prop.icon}
      </ListItemIcon>
      ) : (
        <prop.icon
      />
    )}
      <ListItemText primary={prop.name} />
    </ListItem>
    <Divider style={{marginTop:5, marginBottom:5}}/>
    </Link>
   
        );
      })}
    </List>
    {/* <List component="nav" aria-label="main mailbox folders">
      <NavLink to="/ddg">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        </NavLink>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List> */}
  </div>
    )
};