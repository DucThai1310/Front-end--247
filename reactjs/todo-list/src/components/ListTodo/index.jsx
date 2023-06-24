import '../../styles/todo-list.css';
import Todo from '../Todo';
function ListTodo(props) {
  const { listTodo, deleteTodo, changeStatusTodo } = props;
  return (
    <div className='container'>
      <h2> list todo</h2>
      <div className='list-todo'>
        {listTodo.map(todo => {
          // return <Todo key={todo.id} label={todo.label} status={todo.status} />;
          return (
            <Todo
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              changeStatusTodo={changeStatusTodo}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ListTodo;
