import { useState } from 'react';

function NewTodo(props) {
  const [todoValue, setTodoValue] = useState('');

  const addTodoChild = () => {
    if (todoValue.trim() != '') {
      if (props.addTodo) {
        props.addTodo(todoValue);
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
