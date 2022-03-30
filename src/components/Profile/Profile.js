import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Box } from '@mui/material';
import Dalat from '../../assets/dalat.jpg';
import { Avatar } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BadgeIcon from '@mui/icons-material/Badge';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PhotoIcon from '@mui/icons-material/Photo';
import { Outlet, Link } from 'react-router-dom';

const useStyles = makeStyles({
  profile: {
    marginTop: '100px',
  },
  main: {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  itemmenu: {
    padding: '5px 10px',
    alignItems: 'center',
    display: 'flex',
    borderRadius: '0 15px 0 15px',
    backgroundColor: '#2796dc',
    color: 'white',
    margin: '0 15px',
    cursor: 'pointer',
    border: '0.5px solid #bbb',
  },
  linkitem: {
    textDecoration: 'none',
    
  }
})

const Profile = () => {
  const classes = useStyles();
  const photoURL = localStorage.getItem('photoURL')
  const displayName = localStorage.getItem('userName')
  return (
    <div className={classes.profile}>
      <Box
        sx={{
          width: '80%',
          height: '80vh',
          margin: '0 auto',
          boxShadow: '0 0 2px #bbb',
          borderRadius: '10px',
          backgroundColor: 'white',
        }}
      >
        <Box sx={{
          width: '100%',
          height: '75%',
          borderRadius: '10px 10px 0 0',
        }}
        >
          <img src={Dalat} alt="" style={{
            width: '100%',
            height: '100%',
            borderRadius: '10px 10px 0 0',
            cursor: 'pointer',
          }} />
        </Box>
        <Box>
          <Avatar src={photoURL} alt='' sx={{
            width: '124px',
            height: '124px',
            position: 'absolute',
            top: '70%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '4px solid white',
          }} />
          <p style={{
            position: 'absolute',
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 'bold',
          }}>{displayName ? displayName : 'name'}</p>
        </Box>
        
        
      </Box>
      <Box sx={{
        position: 'relative',
      }}>
        <div className={classes.main}>
          <div className={classes.itemmenu}>
            <Link to="/profile" className={classes.linkitem} >
              <AccountTreeIcon />
              <span style={{marginLeft: '10px'}}>Dòng thời gian</span>
            </Link>
            
          </div>
          <div className={classes.itemmenu}>
            <Link to="/profile/introduce" className={classes.linkitem}>
              <BadgeIcon />
              <span style={{marginLeft: '10px'}}>Giới thiệu</span>
            </Link>
          </div>
          <div className={classes.itemmenu}>
            <PeopleAltIcon />
            <span style={{marginLeft: '10px'}}>Bạn bè</span>
            
          </div>
          <div className={classes.itemmenu}>
            <PhotoIcon />
            <span style={{marginLeft: '10px'}}>Hình ảnh</span>
            
          </div>
        </div>
      </Box>
      <Box sx={{
        width: '80%',
        margin: '25px auto'
      }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Profile;