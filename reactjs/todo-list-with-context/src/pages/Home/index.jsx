import React from 'react';
import TaskList from '../../components/TaskList';
import { useOutletContext } from 'react-router-dom';

function HomePage(props) {
  const [tasks, setTasks] = useOutletContext();
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default HomePage;
