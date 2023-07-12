import { useState } from 'react';
import './style.css';

function Todo(props) {
  const { dispatch } = props;
  ///{id:1, label: "do assignment", isDelete:boolean, status:inprogress}
  const [disable, setDisable] = useState(true);
  const onDelete = () => {
    dispatch({ type: 'delete', id: props.id });
  };
  const onChangeSelect = event => {
    dispatch({ type: 'change', id: props.id, newStatus: event.target.value });
    setDisable(true);
  };
  const onOpenChange = () => {
    setDisable(!disable);
  };
  return (
    <div className='todo'>
      <div
        className='todo__name'
        style={{ textDecoration: props.isDelete == true ? 'line-through' : '' }}>
        {props.label}
      </div>
      <div className='todo__status'>
        <select name='status' value={props.status} onChange={onChangeSelect} disabled={disable}>
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
