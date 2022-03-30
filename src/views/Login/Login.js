import React from 'react';
import BgImg from '../../assets/bg-image.svg';
import Logo from '../../assets/curious.png';

import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// Firebase
import { auth, db } from '../../Firebase/Config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  login: {
    backgroundColor: '#f0f2f5'
  },
  img: {
    width: '50%',
    margin: '20% 25%'
  },
  formlogin: {
    width: '60%',
    border: '1px solid #bbb',
    marginTop: '15%',
    borderRadius: '15px',
    boxShadow: '0 0 5px 1px #bbb',
    backgroundColor: 'white',
  },
  logologin: {
    padding: '25px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputlogin: {
    width: '80%',
    margin: '0 auto'
  },
  textfield: {
    width: '100%'
  },
  or: {
    display: 'flex',
    justifyContent: 'center',
  },
  dividerSection: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: '80%',
  },
  part: {
    width: "calc(100% / 2 - 50px)",
    borderTop: "1px solid #b6b6b6",
  },
  logingoogle: {
    width: '80%',
    margin: '0 auto'
  },
  forgotpass: {
    width: '80%',
    margin: '10px auto',
    cursor: 'pointer',
    color: 'blue',
    textAlign: 'center',
    padding: '25px',
  },
  signup: {
    textAlign: 'center',
    paddingBottom: '25px',
    
  }
})

const Login = () => {
  const classes = useStyles();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    
    .then((result) => {
      console.log(result);

      localStorage.setItem('userName', result.user.displayName)
      localStorage.setItem('photoURL', result.user.photoURL)
      //console.log(localStorage)

    })
    .catch((error) => {
      console.log(error);
    })
  }



  return (
    <div className={classes.login}>
      <Grid container spacing={1}>
        <Grid item xs="6">
          <img src={BgImg} alt="" className={classes.img} />
        </Grid>
        <Grid item xs="6">
          <div className={classes.formlogin}>
            <Grid container spacing={2}>
              <Grid item xs="12">
                <div className={classes.logologin}>
                  <img src={Logo} alt="logo login" style={{
                    height: '50px'
                  }} />
                </div>
              </Grid>
              <Grid item xs="12">
                <div className={classes.inputlogin}>
                  <Grid container spacing={2}>
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
                        id="outlined-basic" 
                        label="Mật khẩu" 
                        variant="outlined" 
                        size="small"
                      />
                    </Grid>
                    <Grid item xs="12">
                      <Button 
                        className={classes.buttonlogin} 
                        variant="contained" 
                        size="large"
                        style={{
                          width: '100%',
                        }}
                      >
                        Đăng nhập
                      </Button>
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.or}>
                <div className={classes.dividerSection}>
                  <div className={classes.part}/>
                  <div className={classes.split}><span>Or</span></div>
                  <div className={classes.part}/>
                </div>
                </div>
                <div className={classes.logingoogle}>
                  <Grid item xs="12">
                    <Button 
                      onClick={signInWithGoogle}
                      className={classes.buttonlogingoogle} 
                      variant="contained" 
                      size="large"
                      style={{
                        backgroundColor: '#ff2323',
                        width: '100%',
                      }}
                    >
                      Google
                    </Button>
                  </Grid>
                </div>
                <div className={classes.forgotpass}>
                  <span>Quên mật khẩu ?</span>
                </div><hr style={{width: '80%'}} />
              </Grid>
              <Grid item xs="12">
                <div className={classes.signup}>
                  <span>Chưa có tài khoản ?</span>
                  <Link to="register" style={{
                    marginLeft: '10px',
                    textDecoration: 'none'
                  }}>Đăng ký</Link>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;