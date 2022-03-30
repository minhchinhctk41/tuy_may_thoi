import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

import Logo from '../../assets/curious.png';

const useStyles = makeStyles({
  register: {
    display: 'flex',
    justifyContent: 'center'
  },
  signupform: {
    width: '35%',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 5px 2px #bbb',
  },
  logosignup: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  },
  inputsignup: {
    width: '80%',
    margin: '0 auto',
  },
  textfield: {
    width: '100%',
  }
})

const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.register}>
      <div className={classes.signupform}>
        <Grid container spacing={2}>
          <Grid item xs="12">
            <div className={classes.logosignup}>
              <img src={Logo} alt="logo signup" style={{
                height: '50px'
              }} />
            </div>
          </Grid>
          <Grid item xs='12'>
            <div className={classes.inputsignup}>
              <Grid container spacing={2}>
                <Grid item xs="12">
                  <TextField 
                    className={classes.textfield} 
                    id="outlined-basic" label="Tên" 
                    variant="outlined" 
                    size="small"
                  />
                </Grid>
                <Grid item xs="12">
                  <TextField 
                    className={classes.textfield} 
                    id="outlined-basic" label="Email" 
                    variant="outlined" 
                    size="small"
                  />
                </Grid>
                <Grid item xs="12">
                  <TextField 
                    className={classes.textfield} 
                    id="outlined-basic" label="Mật khẩu" 
                    variant="outlined" 
                    size="small"
                  />
                </Grid>
              </Grid>
            </div><hr style={{width: '80%'}} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Register;