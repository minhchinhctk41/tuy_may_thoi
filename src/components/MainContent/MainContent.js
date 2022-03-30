import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import PostContent from './PostContent/PostContent'
import CreatePost from './CreatePost/CreatePost';

const useStyles = makeStyles({
  maincontent: {
    
  },
  post: {
    backgroundColor: 'white',
    height: '125px',
    padding: '10px',
    borderRadius: '10px',
  },
  inputpost: {
    backgroundColor: '#f0f2f5',
    height: '40px',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '0 auto'
  },
  inputitem: {
    marginTop: '5px',
    height: '50px',
    padding: '10px',
    display: 'flex',
    alignItems: 'SwapCallsRounded',
  },
  buttonpost: {
    backgroundColor: 'white',
    color: '#484848',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    fontSize: '12px',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    }
  },
  newpost: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '45%',
    backgroundColor: 'white',
    padding: '15px 25px',
    borderRadius: '10px',
  },
  additem: {
    margin: '10px 0',
    border: '1px solid #bbb',
    padding: '5px 10px',
    borderRadius: '5px',
  },
  text: {
    transform: 'translate(0%, 10%)',
    cursor: 'context-menu',
  },
  item: {
    transform: 'translate(0%, 10%)',
    cursor: 'pointer',
  }
})

const MainContent = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <div className={classes.maincontent}>
      <Grid container spacing={1}>
        <Grid item xs="12">
          <div className={classes.post}>
            <Grid item xs="12">
              <div className={classes.inputpost} onClick={handleOpen}>
                <span>Minh ơi! Bạn đang nghĩ gì thế ?</span>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <CreatePost />
              </Modal>
            </Grid>
            <Grid item xs="12">
              <div className={classes.inputitem}>
                <Grid item xs="4">
                  <Button variant="contained" className={classes.buttonpost}>Ảnh</Button>
                </Grid>
                <Grid item xs="4">
                  <Button variant="contained" className={classes.buttonpost}>Địa điểm</Button>
                </Grid>
                <Grid item xs="4">
                  <Button variant="contained" className={classes.buttonpost}>Cảm xúc</Button>
                </Grid>
              </div>
              
            </Grid>
          </div>
        </Grid>
        <Grid item xs="12">
          <PostContent />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContent;