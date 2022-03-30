import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, ListItemButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from '../../assets/curious.png';
import { auth } from '../../Firebase/Config';
import axios from "axios";


import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import Popover from '@mui/material/Popover';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const useStyles = makeStyles({
  header: {
    backgroundColor: 'White',
    padding: '10px',
    height: '60px',
    position: 'fixed',
    zIndex: '2',
    top: '0',
    left: '0',
    right: '0',
  },
  logo: {
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  search: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsearch: {
    width: '70%',
    height: '40px',
    borderRadius: '5px',
    padding: '0 15px',
  },
  menuitem: {
    height: '100%',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginRight: '15px',
  },
  popoversetting: {
    transform: 'translate(-10px, 10px)',
  }
})

const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("hello: ")

  // 29/03/2022 - hieucn - test call api ms-user
  useEffect(() =>{
    console.log("hello: ")
    axios.get("http://0.0.0.0:8000/api/v1/test")
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  },[])

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className={classes.header}>
      <div>hello world ms-user: </div>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <div className={classes.logo}>
            <Link to="/">
              <img src={Logo} alt="logo" style={{
                height: '50px'
              }}/>
            </Link>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.search}>
            <input className={classes.inputsearch} placeholder="Tìm kiếm ..." />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.menuitem}>
            <IconButton size='large' color='inherit'>
              <Link to="/" style={{}}>
                <HomeIcon />
              </Link>
            </IconButton>
            <IconButton size="large" aria-label="show 2 new mails" color="inherit">
              <Badge badgeContent={2} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 7 new notifications"
              color="inherit"
            >
              <Badge badgeContent={7} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <ArrowDropDownIcon onClick={handleClick} />
              <Popover
                className={classes.popoversetting}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <div className={classes.setting}>
                  <List>
                    <ListItemButton>Setting</ListItemButton>
                    <ListItemButton
                      onClick={() => auth.signOut()}
                    >
                      Log out
                    </ListItemButton>
                  </List>
                </div>
              </Popover>
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;