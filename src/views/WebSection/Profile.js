import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography ,Paper}from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
     float:'left',
     paddingTop:'1rem'
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
       
          flexGrow: 0.2,
      },
    },
    paper: {
      //marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
       // marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
  }));

export default function AddCategory() {
    const classes = useStyles()
  return (
    <div>
         <main className={classes.layout}>
        <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom className={classes.title}>
       Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <TextField
            required
            id="firstName"
            name="firstName"
            fullWidth
            defaultValue="Muskan"
          />
    
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
          id="lastname"
          defaultValue="Agrawal"
          fullWidth
        />
        </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom className={classes.title}>
      Gender
      </Typography>
        <Grid container spacing={3}>
        
      <Grid item xs={12} md={2}>
        <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1" value="female" style={{display:'flex'}}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
        </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom className={classes.title}>
       Email Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
          defaultValue="muskan@gmail.com"
          fullWidth
        />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
      <Typography variant="h6" gutterBottom className={classes.title}>
       Mobile Number
      </Typography>
      <Grid container spacing={3}>
       <Grid item xs={12} md={6}>
          <TextField
          defaultValue="+918595595959"
          fullWidth
        />
        </Grid>
      </Grid>
      </Paper>
      </main>
    </div>
  );
}