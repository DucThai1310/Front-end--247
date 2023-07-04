import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

const PublicLayout = props => {
  const { carts } = props;

  return (
    <div>
      <Header carts={carts} />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
