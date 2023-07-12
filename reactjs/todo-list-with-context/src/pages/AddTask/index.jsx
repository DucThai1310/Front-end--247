import React, { useContext } from 'react';
import Form from '../../components/Form';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { dispatch } from '../../redux/store';

function AddTaskPage(props) {
  const navigate = useNavigate();
  const [tasks, setTasks] = useOutletContext();
  const createTask = task => {
    dispatch({ type: 'add', payload: task });
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
