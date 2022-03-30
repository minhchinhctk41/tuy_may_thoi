import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { 
          List, 
          ListItem, 
          ListItemButton, 
          ListItemIcon, 
          ListItemText 
        } from '@mui/material';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import ErrorIcon from '@mui/icons-material/Error';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import Modal from '@mui/material/Modal';

const useStyles = makeStyles({
  mess: {
    margin: '105px auto',
    backgroundColor: 'white',
    width: '80%',
    height: '85vh',
    borderRadius: '10px',
  },
  add: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 25px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  youtext: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 25px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  content: {
    height: '60vh',
    margin: '2%',
    overflowY: 'auto',
  },
  writemessage: {
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inp: {
    border: '1px solid #bdbdbd',
    height: '5vh',
    width: '90%',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  antd: {
    width: '85%',
    height: '90%',
    border: 'none',
    padding: '0 15px',
    borderRadius: '10px',
    '&:focus': {
      border: 'none',
      outline: 'none',
    }
  },
  newmess: {
    width: '500px',
    height: '250px',
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    
  }
})


const Messenger = () => {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    
    <div className={classes.mess}>
      <Grid container spacing={2}>
        <Grid item xs="4">
          <div className={classes.add}>
            <p>Tin nhắn</p>
            <Button onClick={handleOpen}>
              <AddCircleIcon style={{
                color: '#bdbdbd'
              }} />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className={classes.newmess}>
                <h2 style={{
                  textAlign: 'center'
                }}>Tin nhắn mới</h2><hr />
                <form>
                  <label>to:</label>
                  <input />
                  <button>Find</button>
                </form>
              </div>
            </Modal>
          </div> <hr />
          <List>
              
                <ListItem disablePadding >
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar />
                    </ListItemIcon>
                    <ListItemText primary="Minh Chính" />
                  </ListItemButton>
                </ListItem>
            </List>
        </Grid>
        <Grid item xs="8">
          <div className={classes.youtext}>
            <p>Minh Chính</p>
            <ErrorIcon style={{
              color: '#bdbdbd'
            }} />
          </div> <hr />
          <div className={classes.content}>
            nội dung tin nhắn
          </div>
          <div className={classes.writemessage}>
            <div className={classes.inp}>
              <input className={classes.antd} placeholder="message.." />
              <SentimentSatisfiedAltIcon style={{
                cursor: 'pointer',
              }} />
              <SendIcon style={{
                marginLeft: '2%',
                cursor: 'pointer',
              }} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
    
  );
};

export default Messenger;