import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const homepage = () => {
  return (
    <div>
      <Box>
        <Box sx={{marginBottom: '20px'}}>
          <Header />
        </Box>
        <Box>
          {/* <Content /> */}
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default homepage;