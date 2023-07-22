import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { todoApi } from './api';
import { TaskContextProvider } from './context';
import { Router } from './router';
import { useDispatch } from 'react-redux';
import { setTodoList } from './redux/slices';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    todoApi.list().then(res => {
      dispatch(setTodoList(res));
    });
  }, []);

  return (
    <TaskContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </TaskContextProvider>
  );
}

export default App;
