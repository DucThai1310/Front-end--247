import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/Form';
import { useGetTodoByIdQuery, useUpdateTodoMutation } from '../../service/todoService';

function DetailTaskPage(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: todoData } = useGetTodoByIdQuery({ id });
  const [updateTodo, { isSuccess, isError }] = useUpdateTodoMutation();
  // console.log("🚀 ~ file: index.jsx:11 ~ DetailTaskPage ~ isError:", isError)
  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate('/');
  //   }
  // }, [isSuccess]);
  const updateTask = taskUpdate => {
    updateTodo({ id, todo: taskUpdate }).then(() => {
      navigate('/');
    });
  };
  return (
    <div>
      <Form task={todoData} updateTask={updateTask} />
    </div>
  );
}

export default DetailTaskPage;
