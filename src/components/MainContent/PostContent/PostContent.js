import React from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import Sg from '../../../assets/sg.jpg'

const useStyles = makeStyles({
  postcontent: {
    backgroundColor: 'white',
    padding: '10px',
  },
  cardheader: {
    display: 'flex',
  },
  avatarpost: {
   margin: 'auto 15px'
  },
  timepost: {
    fontSize: '14px',
    display: 'grid',
  },
  nameuser: {
    fontWeight: 'bold',
  },
  time: {
    color: '#484848'
  },
  imagepost: {
    width: '100%',
  },
  user: {
    fontSize: '16px',
    margin: '10px 0',
  },
  pos: {
    fontSize: '14px',
    padding: '10px 0',
  },
  like: {
    display: 'flex',
  }
})

const PostContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.postcontent}>
      <Grid container spacing={1}>
        <Grid item xs="12">
          <div className={classes.cardheader}>
            <div className={classes.avatarpost}>
              <Avatar />
            </div>
            <div className={classes.timepost}>
              <span className={classes.nameuser}>Minh Chính</span>
              <span className={classes.time}>9 phút trước</span>
            </div>
          </div>
        </Grid>
        <Grid item xs="12">
          <div className={classes.mainpost}>
            <img className={classes.imagepost} src={Sg} alt="tp.hcm" />
            <div className={classes.caption}>
              <Grid container spacing={2}>
                <Grid item xs="4">
                  <h2 className={classes.user}>Minh Chính</h2>
                </Grid>
                <Grid item xs="8">
                  <div className={classes.pos}>
                    <span>
                      Thành phố Hồ Chí Minh 
                      (vẫn thường được gọi bằng tên cũ là Sài Gòn) 
                      là thành phố lớn nhất ở Việt Nam về dân số và 
                      quy mô đô thị hóa.
                    </span>
                  </div>
                </Grid>
                <Grid item xs="12">
                  <div className={classes.like}>
                    <Box
                      sx={{
                        display: 'grid',
                        marginRight: '15px',
                      }}
                    >
                      <FavoriteBorderIcon />
                      <span>1 like</span>
                    </Box>
                    <Box
                    sx={{
                        marginRight: '15px',
                      }}
                    >
                      <ChatBubbleOutlineIcon />
                    </Box>
                    <Box>
                      <BookmarkBorderIcon />
                    </Box>
                  </div><hr />
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostContent;