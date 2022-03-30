import React from 'react';
import { useRoutes } from 'react-router-dom';

import Homepage from './views/HomePage/HomePage';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import MainContent from './components/MainContent/MainContent';
import Explore from './components/Explore/Explore';
import Watch from './components/Watch/Watch';
import Trending from './components/Trending/Trending';
import Friend from './components/Friend/Friend';
import Messenger from './components/Messenger/Messenger';
import Profile from './components/Profile/Profile';
import Content from './components/Content/Content';
import Timeline from './components/Profile/timeline/Timeline';
import Introduce from './components/Profile/introduce/Introduce'

const Router = () => {
  return (
    useRoutes([
      {
        path: '/',
        element: <Homepage />,
        children: [
          { path: '/', element: <Content />, children:[
            { path: '/', element: <MainContent />},
            { path: '/explore', element: <Explore /> },
            { path: '/watch', element: <Watch /> },
            { path: '/friend', element: <Friend /> },
          ] },
          {path: '/profile', element: <Profile />, children:[
            { path: '/profile/', element: <Timeline />},
            { path: '/profile/introduce', element: <Introduce />},
          ]},
          { path: '/trending', element: <Trending /> },
          { path: '/messenger', element: <Messenger /> },
        ]
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ])
  );
};

export default Router;