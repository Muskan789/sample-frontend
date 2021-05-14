import React from 'react';
import {ListItem,List} from '@material-ui/core';
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


export default function UserSidebar(props){

    const { user_routes } = props;
    return(
<div>
<List>
      {user_routes.map((prop, key) => {
          return (
            <Link
              to={prop.layout + prop.path}
              key={key}
            >
    <ListItem button>
    {typeof prop.icon === "string" ? (
      <ListItemIcon>
        {prop.icon}
      </ListItemIcon>
      ) : (
        <prop.icon
      />
    )}
      <ListItemText primary={prop.name} />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
    </Link>
        );
      })}
    </List>
  </div>
    )
};