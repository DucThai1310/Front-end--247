import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoApi } from '../../api';
import TaskList from '../../components/TaskList';
import { setTodoList } from '../../redux/slices';

function ToDoTaskPage(props) {
  const { todo } = useSelector(state => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
  
    todoApi.list({ status: 'newtask' }).then(res => {
      dispatch(setTodoList(res));
    });
  }, []);
  return (
    <div>
      <TaskList tasks={todo}></TaskList>
    </div>
  );
}

export default ToDoTaskPage;
