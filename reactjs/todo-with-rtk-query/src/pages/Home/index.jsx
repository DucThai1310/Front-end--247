import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../../components/TaskList';
import { useListTodoQuery } from '../../service/todoService';
function HomePage() {
  const { todo } = useSelector(state => state.todo);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   todoApi.list().then(res => {
  //     dispatch(setTodoList(res));
  //   });
  // }, []);
  const { data, isLoading } = useListTodoQuery({});

  return (
    <div>
      <TaskList tasks={todo} />
    </div>
  );
}

export default HomePage;
