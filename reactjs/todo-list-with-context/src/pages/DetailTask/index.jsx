import React, { useEffect, useState } from 'react';
import Form from '../../components/Form';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

function DetailTaskPage(props) {
  const navigate = useNavigate();
  const [tasks, setTasks] = useOutletContext();
  const { id } = useParams();
  const [taskDetail, setTaskDetail] = useState(undefined);
  useEffect(() => {
    const taskData = tasks.find(task => task.id == id);
    if (taskData) {
      setTaskDetail(taskData);
    }
  }, [id, tasks]);
  const updateTask = taskUpdate => {
    const taskIndex = tasks.findIndex(task => task.id == id);
    if (taskIndex > -1) {
      const cloneTasks = [...tasks];
      cloneTasks.splice(taskIndex, 1, taskUpdate);
      setTasks(cloneTasks);
    }
    navigate('/');
  };
  return (
    <div>
      <Form task={taskDetail} updateTask={updateTask} />
    </div>
  );
}

export default DetailTaskPage;
