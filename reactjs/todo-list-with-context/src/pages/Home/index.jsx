import React, { useEffect } from 'react';
import TaskList from '../../components/TaskList';
import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setLoading, setTodoList } from '../../redux/slices';
import { todoApi } from '../../api';
import { useDispatch } from 'react-redux';
function HomePage() {
  const { todo } = useSelector(state => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    todoApi.list().then(res => {
      dispatch(setTodoList(res));
    });
  }, []);

  return (
    <div>
      <TaskList tasks={todo} />
    </div>
  );
}

export default HomePage;
