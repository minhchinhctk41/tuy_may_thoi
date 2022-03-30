import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const useStyles = makeStyles({
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
    cursor: 'pointer',
  }
})

const CreatePost = () => {
  const classes = useStyles();

  const displayName = localStorage.getItem('userName')
  const photoURL = localStorage.getItem('photoURL')

  const [image, setImage] = useState([]);
  const [isImage, setIsImage] = useState(false);

  const handleChange = (event) => {
    const imageList = event.target.files;
    if (imageList) {
        const fileArray = Array.from(imageList).map(file => URL.createObjectURL(file))
        console.log(fileArray)
        setImage((prevImage) => prevImage.concat(fileArray));
    }
    if (imageList.length > 0) {
        if (!isImage) {
            setIsImage(true);
        }
    }
  }

  const [input, setInput] = React.useState("");
  const choseEmoji = (emoji) => {
    let emojiXX = emoji.native;
    setInput(input + emojiXX);
  };
  return (
    <div className={classes.newpost}>
      <span>Tạo bài viết</span><hr />
      
      <Grid container spacing={2}>
        <Grid item xs='2'>
          <div className={classes.avatarpost}>
            <Avatar src={photoURL} />
          </div>
        </Grid>
        <Grid item xs='10'>
          <div style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{
              fontWeight: 'bold',
              color: 'blue',
              textTransform: 'capitalize'
            }}>{displayName ? displayName : ''}</span>
          </div>
        </Grid>
      </Grid>
      <div className={classes.contentpost}>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Bạn đang nghĩ gì thế .."
          value={input}
          onChange={event => setInput(event.target.value)}
          sx={{
            width : '100%',
            margin: '15px 0',
            '&hover:': {
              outline: 'none'
            }
          }}
        />
      </div>
      <div className={classes.additem}>
        <Grid container spacing={2} style={{
          overflowX: 'auto',
          padding: '0',

        }}>
          <Grid item xs="9">
            <div className={classes.text}>
              <span>Thêm vào bài viết :</span>
            </div>
          </Grid>
          
          <Grid item xs="1.5">
            
            <div className={classes.item}>
            <input id="file-input" accept="image/*|video/*"
              type="file"
              multiple="multiple"
              onChange={handleChange}
              style={{ display: 'none' }}
              onClick={e => (e.target.value = null)}
              webkitdirectory
            />
              <label for="file-input" style={{
                cursor: 'pointer'
              }}>
                <ImageIcon />
              </label>
            </div>
          </Grid>
          <Grid item xs="1.5">
            <div className={classes.item}>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <IconButton aria-label="share" {...bindTrigger(popupState)}>
                      <AddReactionIcon style={{
                        color: 'black',
                        marginTop: '-8px'
                      }} />
                    </IconButton>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <div className="emoji">
                        <Picker set="google" onClick={choseEmoji} />
                      </div>
                    </Popover>
                  </div>
                )}
              </PopupState>
            </div>
          </Grid>
          <Grid item xs="12" style={{
            maxHeight: '100px'
          }}>
            {
              isImage ?
                <div className="post-img">
                  <Grid container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 4, md: 12 }}
                  >
                    {
                      image && image.length > 0 ?
                        image.map((img, i) => {
                          return (<Grid item xs={2} sm={4} md={4} key={i}>
                            <img src={img} alt='' style={{
                              maxHeight: '100px'
                            }} />
                          </Grid>)
                        }) : ''
                    }
                  </Grid>

                </div> : ''
            }
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={1}>
        <Grid item xs="12">
          <Button 
            variant="contained"
            style={{
              width: '100%',
            }}
          >
            Đăng
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatePost;