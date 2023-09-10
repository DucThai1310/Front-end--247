import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import { useCreateTodoMutation } from '../../service/todoService';

function AddTaskPage(props) {
  const navigate = useNavigate();
  const [createTodo, { data }] = useCreateTodoMutation();
  console.log('🚀 ~ file: index.jsx:9 ~ AddTaskPage ~ data:', data);
  const createTask = task => {
    // setTasks( [ ...tasks, task ] );
    // todoApi.create(task).then(() => {
    //   navigate('/');
    // });
    createTodo({ todo: task });
  };
  return (
    <div>
      <Form createTask={createTask}></Form>
    </div>
  );
}

export default AddTaskPage;
