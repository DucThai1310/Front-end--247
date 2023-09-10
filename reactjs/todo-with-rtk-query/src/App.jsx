import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { TaskContextProvider } from './context';
import { Router } from './router';
import { useLazyListTodoQuery, useListTodoQuery } from './service/todoService';
import { useEffect } from 'react';
import { setTodoList } from './redux/slices';

function App() {
  const dispatch = useDispatch();
  // const { data } = useListTodoQuery( {} );
  const [listTodo, { data }] = useLazyListTodoQuery();
  useEffect(() => {
    listTodo();
  }, []);
  useEffect(() => {
    if (data) {
      dispatch(setTodoList(data));
    }
  }, [data]);
  return (
    <TaskContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </TaskContextProvider>
  );
}

export default App;
