import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import AddTaskPage from '../pages/AddTask';
import DoingTaskPage from '../pages/DoingTask';
import DoneTaskPage from '../pages/DoneTask';
import NewTaskPage from '../pages/NewTask';
import DetailTaskPage from '../pages/DetailTask';
import Layout from '../layout';
export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/new-task' element={<NewTaskPage />} />
        <Route path='/doing-task' element={<DoingTaskPage />} />
        <Route path='/done-task' element={<DoneTaskPage />} />
        <Route path='/add-task' element={<AddTaskPage />} />
        <Route path='/detail/:id' element={<DetailTaskPage />} />
      </Route>
    </Routes>
  );
};
