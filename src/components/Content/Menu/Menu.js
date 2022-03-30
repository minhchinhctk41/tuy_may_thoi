import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  menu: {
    // backgroundColor: 'white',
  },
  user: {
    height: '80px',
    width: '70%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    padding: '0 10px',
    borderRadius: '10px',
  },
  avatar: {
    marginRight: '15px',
    display: 'flex',
    textDecoration: 'none',
    textAlign: 'center',
    alignItems: 'center',
  },
  menuitem: {
    backgroundColor: 'white',
    width: '70%',
    margin: '0 auto',
    padding: '0 10px',
    borderRadius: '10px',
  },
  
  linkitem: {
    textDecoration: 'none',
    color: '#5c5c5c',
    '& :hover' : {
      color: 'blue',
    }
  }
})

const Menu = () => {
  const classes = useStyles();

  const displayName = localStorage.getItem('userName')
  const photoURL = localStorage.getItem('photoURL')
  
  return (
    <div className={classes.menu}>
      <Grid container spacing={1}>
        <Grid item xs="12">
          
            <div className={classes.user}>
              <Link to="/profile" style={{textDecoration: 'none',}}>
                <div className={classes.avatar}>
                  <Avatar alt='photo URL' src={photoURL} />
                  <p
                    style={{
                      fontWeight: 'bold',
                      marginLeft: '15px',
                    }}
                  >{displayName ? displayName : 'user name'}</p>
                </div>
              </Link>
            </div>
          
        </Grid>
        <Grid item xs="12">
          <div className={classes.menuitem}>
            <List>
              <Link to="/explore" className={classes.linkitem}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ExploreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Khám phá" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/watch" className={classes.linkitem}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SlideshowIcon />
                    </ListItemIcon>
                    <ListItemText primary="Watch" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/trending" className={classes.linkitem}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TrendingUpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Xu hướng" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/friend" className={classes.linkitem}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bạn bè" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/messenger" className={classes.linkitem}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tin nhắn" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Menu;