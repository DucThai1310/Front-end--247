import { useContext } from 'react';
import { useState } from 'react';
import { TodoContext } from '../../context';

function NewTodo() {
  const { dispatch } = useContext(TodoContext);
  const [todoValue, setTodoValue] = useState('');

  const addTodoChild = () => {
    if (todoValue.trim() != '') {
      if (dispatch) {
        dispatch({ type: 'add', value: todoValue });
        setTodoValue('');
      }
    } else {
      alert('Please enter todo!');
    }
  };
  const onChangeTodo = event => {
    setTodoValue(event.target.value);
  };
  return (
    <div>
      <input type='text' id='todo' value={todoValue} onChange={onChangeTodo} />
      <button onClick={addTodoChild}>Add</button>
    </div>
  );
}
export default NewTodo;
