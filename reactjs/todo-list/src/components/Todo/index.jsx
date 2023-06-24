import { useState } from 'react';
import '../../styles/todo.css';

function Todo(props) {
  console.log('🚀 ~ file: index.jsx:5 ~ props:', props);
  ///{id:1, label: "do assignment", isDelete:boolean, status:inprogress}
  const [isChange, setIsChange] = useState(true);
  const onDelete = () => {
    props.deleteTodo && props.deleteTodo(props.id);
  };
  const onChangeSelect = event => {
    props.changeStatusTodo && props.changeStatusTodo(props.id, event.target.value);
    setIsChange(true);
  };
  const onOpenChange = () => {
    setIsChange(!isChange);
  };
  return (
    <div className='todo'>
      <div
        className='todo__name'
        style={{ textDecoration: props.isDelete == true ? 'line-through' : '' }}>
        {props.label}
      </div>
      <div className='todo__status'>
        <select name='status' value={props.status} onChange={onChangeSelect} disabled={isChange}>
          <option value='not-stated'>Not Started</option>
          <option value='inprogress'>InProgress</option>
          <option value='completed'>Completed</option>
        </select>
      </div>
      <div className='todo__action'>
        <button className='btn btn-delete' onClick={onDelete}>
          delete
        </button>
        <button className='btn btn-change-status' onClick={onOpenChange}>
          Change
        </button>
      </div>
    </div>
  );
}

export default Todo;
