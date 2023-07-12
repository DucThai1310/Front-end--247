import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { TaskContext } from '../context';

function Layout() {
  const { tasks, setTasks } = useContext(TaskContext);
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
