import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../../components/TaskList';

function ToDoTaskPage(props) {
  const { todo } = useSelector(state => state.todo);
  const dispatch = useDispatch();
  // useEffect(() => {
  
  //   todoApi.list({ status: 'newtask' }).then(res => {
  //     dispatch(setTodoList(res));
  //   });
  // }, []);
  return (
    <div>
      <TaskList tasks={todo}></TaskList>
    </div>
  );
}

export default ToDoTaskPage;
