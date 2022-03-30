import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Config';
import { CircularProgress } from '@mui/material';


export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName, email, uid, photoURL,
        });
        setIsLoading(false);
        //navigate('/');
        return;
      }

      setIsLoading(false);
      navigate('/login');
    });

    // clean function
    return () => {
      unsubscibed();
    }
  },[navigate])


  return (
    <AuthContext.Provider value={{user}}>
      {isLoading ? <CircularProgress /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;