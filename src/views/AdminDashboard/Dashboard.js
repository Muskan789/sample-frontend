import React from 'react';
import { useTheme,makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import {Drawer,Accordion,AccordionSummary,AccordionDetails,Hidden,List,
        
    Paper ,
    
    Toolbar,
    Grid,
    Container,
    Link,
    Divider,
    Button,

    } from '@material-ui/core';
    import Linechart from '../../component/Charts/Linechart'

const useStyles = makeStyles(theme => ({
    
    title:{
      flexGrow: 1,
      textAlign:'center',
      marginTop:'1%',
      color:'#1e83a9',
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

export default function Dashboard() {
    const classes = useStyles();
    const theme = useTheme();


  return (
    <div>
      <Container>
         <Grid container spacing={3}>
         
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.paper}>
                <Linechart />
              </Paper>
            </Grid>
           
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.paper}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Current Sales
    </Typography>
      <Typography component="p" variant="h4">
        Rs 6789.90
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
       Report text
      </Typography>
      <div>
        <Link color="primary" href="#">
          View balance
        </Link>
      </div>
              </Paper>
            </Grid>
          
          </Grid> 
      </Container>
    </div>
  );
}