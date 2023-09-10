import React from 'react';
import TaskList from '../../components/TaskList';
import { useOutletContext } from 'react-router-dom';
import { DONE } from '../../constants';

function DoneTaskPage(props) {
  const [tasks, setTasks] = useOutletContext();

  return (
    <div>
      <TaskList tasks={tasks.filter(task => task.status == DONE)}></TaskList>
    </div>
  );
}

export default DoneTaskPage;
