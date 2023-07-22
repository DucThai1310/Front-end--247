import React, { useContext } from 'react';
import Form from '../../components/Form';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { todoApi } from '../../api';

function AddTaskPage(props) {
  const navigate = useNavigate();
  // const [tasks, setTasks] = useOutletContext();
  const createTask = task => {
    // setTasks( [ ...tasks, task ] );
    todoApi.create(task).then(() => {
      navigate('/');
    });
  };
  return (
    <div>
      <Form createTask={createTask}></Form>
    </div>
  );
}

export default AddTaskPage;
