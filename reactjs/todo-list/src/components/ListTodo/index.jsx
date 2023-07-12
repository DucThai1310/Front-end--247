import './style.css';
import Todo from '../Todo';
import { useContext } from 'react';
import { TodoContext } from '../../context';

function ListTodo() {
  const { listTodo, dispatch } = useContext(TodoContext);
  return (
    <div className='container'>
      <h2> list todo</h2>
      <div className='list-todo'>
        {listTodo.map(todo => {
          // return <Todo key={todo.id} label={todo.label} status={todo.status} />;
          return <Todo key={todo.id} {...todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}
export default ListTodo;
