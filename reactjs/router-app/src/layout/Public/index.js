import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

const PublicLayout = props => {
  const { carts,setCarts } = props;

  return (
    <div>
      <Header carts={carts} setCarts={setCarts} />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
