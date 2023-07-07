import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout(props) {
  return (
    <div>
      <Header />
      <main style={{ display: 'flex' }}>
        <SideBar />
        <div className='content'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
