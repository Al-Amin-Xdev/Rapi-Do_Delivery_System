import React from 'react';
import useAuth from '../Custom-Hooks/useAuth';
import Loader from '../pages/shared-page/Loader-Spinner/Loader';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
  const {user, loader} = useAuth();

  if(loader){
    return <Loader></Loader>
  }
  if(!user){
    return <Navigate to="/login"></Navigate>
  }
  return children;
};

export default PrivateRoute;