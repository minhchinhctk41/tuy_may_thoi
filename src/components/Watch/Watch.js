import React from 'react';
import { CardMedia } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Video from '../../assets/video/roman-odintsov.mp4';

const useStyles = makeStyles({

})

const Watch = () => {
  const classes = useStyles();
  return (
    <div className={classes.watch}>
      <CardMedia
        component='video'
        src={Video}
        alt="Paella dish"
        controls
        autoPlay
      />
    </div>
  );
};

export default Watch;