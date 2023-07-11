import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TaskList from '../../components/TaskList';
import { TODO } from '../../constants';

function ToDoTaskPage(props) {
  const [tasks, setTasks] = useOutletContext();

  return (
    <div>
      <TaskList tasks={tasks.filter(task => task.status == TODO)}></TaskList>
    </div>
  );
}

export default ToDoTaskPage;
