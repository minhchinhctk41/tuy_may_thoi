import React from 'react';
import { makeStyles } from '@mui/styles';

import AccountFollow from './AccountFollow/AccountFollow'

const useStyles = makeStyles({
  rightcontent: {
    

  },
  follow: {
    padding: '10px',
    margin: '0',
    backgroundColor: 'white',
    borderRadius: '10px',
    width: '70%',
    margin: '0 auto',
  },
  everyone: {
    backgroundColor: 'white',
    padding: '10px 0',
  },
  showmore: {
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#2796dc'
  }
})
const RightContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.rightcontent}>
      <div className={classes.follow}>
        <h2>Gợi ý</h2><hr />
        <div className={classes.everyone}>
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
        </div><hr />
        <span className={classes.showmore}>Nhiều hơn</span>
      </div>
    </div>
  );
};

export default RightContent;