import React from 'react';
import { INPROGRESS } from '../../constants';
import { useOutletContext } from 'react-router-dom';
import TaskList from '../../components/TaskList';

function InProgressTask(props) {
  const [tasks, setTasks] = useOutletContext();

  return (
    <div>
      <TaskList tasks={tasks.filter(task => task.status == INPROGRESS)}></TaskList>
    </div>
  );
}

export default InProgressTask;
