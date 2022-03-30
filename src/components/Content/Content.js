import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu/Menu';
import RightContent from './RightContent/RightContent';
import { makeStyles } from '@mui/material';
import { Grid } from '@mui/material';





const Content = () => {
  return (
    <div className="content" style={{
      marginTop: '100px',
    }}>
      <Grid container spacing={1}>
        <Grid item xs="3.5">
          <Menu />
        </Grid>
        <Grid item xs="5">
          <Outlet />
        </Grid>
        <Grid item xs="3.5">
          <RightContent />
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;