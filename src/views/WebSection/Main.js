import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const posts = [{
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    // image: 'https://source.unsplash.com/random',
    // imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    // image: 'https://source.unsplash.com/random',
    // imageText: 'Image Text',
  },
];


  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
       Sample Posts
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Grid className={classes.markdown} >
          {post}
        </Grid>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};