import React from 'react';
import { Avatar } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  accountfollow: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    margin: '5px 0',
    padding: '0',
  },
  nameac: {
    margin: 'auto 10px'
  },
  butt: {
    fontSize: '10px',
    width: '100%',
  }
})

const AccountFollow = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs="8">
          <div className={classes.accountfollow}>
            <Avatar
              alt="avatar account"
              src=''
              sx={{ width: 24, height: 24 }}
              />
            <span className={classes.nameac}>Do Minh Chinh</span>
          </div>
          
        </Grid>
        <Grid item xs="4">
          <div className={classes.buttonfollow}>
            <Button variant="outlined" size='small' className={classes.butt}>Theo dõi</Button>
          </div>
          
        </Grid>
      </Grid>
    </>
  );
};

export default AccountFollow;