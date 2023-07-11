import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout(props) {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <Header />
      <main style={{ display: 'flex' }}>
        <SideBar />
        <div className='content' style={{ width: '100%' }}>
          <Outlet context={[tasks, setTasks]} />
        </div>
      </main>
    </div>
  );
}

export default Layout;
