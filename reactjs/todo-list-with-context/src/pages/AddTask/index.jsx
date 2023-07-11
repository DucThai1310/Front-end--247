import React from 'react';
import Form from '../../components/Form';
import { useNavigate, useOutletContext } from 'react-router-dom';

function AddTaskPage(props) {
  const navigate = useNavigate();
  const [tasks, setTasks] = useOutletContext();
  const createTask = task => {
    setTasks([...tasks, task]);
    navigate('/');
  };
  return (
    <div>
      <Form createTask={createTask}></Form>
    </div>
  );
}

export default AddTaskPage;
