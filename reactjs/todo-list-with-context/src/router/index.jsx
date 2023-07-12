import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import AddTaskPage from '../pages/AddTask';
import InProgressTask from '../pages/InProgress';
import DoneTaskPage from '../pages/DoneTask';
import ToDoTaskPage from '../pages/TodoTask';
import DetailTaskPage from '../pages/DetailTask';
import Layout from '../layout';
export const Router = ( ) => {
  
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/new-task' element={<ToDoTaskPage />} />
        <Route path='/doing-task' element={<InProgressTask />} />
        <Route path='/done-task' element={<DoneTaskPage />} />
        <Route path='/create-task' element={<AddTaskPage />} />
        <Route path='/detail/:id' element={<DetailTaskPage />} />
      </Route>
    </Routes>
  );
};
