import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/Header';

function PrivateLayout(props) {
  const { carts } = props;
  const isAuth = localStorage.getItem('isAuth');
  if (isAuth) {
    return (
      <div>
        <Header carts={carts} />
        <Outlet />
      </div>
    );
  } else {
      // navigate('/login');
    return <Navigate to='/login' replace />;
  }
}

export default PrivateLayout;
