import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ListTodo from './components/ListTodo';
import NewTodo from './components/NewTodo';
function App() {
  //[{id:1, label: "do assignment", isDelete:boolean},]
  const [listTodo, setListTodo] = useState([]);
  const addTodo = value => {
    const todo = { id: uuidv4(), label: value, isDelete: false, status: 'inprogress' };
    const cloneListTodo = [...listTodo];
    cloneListTodo.push(todo);
    setListTodo(cloneListTodo);
  };
  const deleteTodo = id => {
    const indexTodoDelete = listTodo.findIndex(todo => todo.id == id);
    const cloneListTodo = [...listTodo];
    cloneListTodo[indexTodoDelete].isDelete = true;
    setListTodo(cloneListTodo);
  };
  const changeStatusTodo = (id, newStatus) => {
    const indexTodo = listTodo.findIndex(todo => todo.id == id);
    const cloneListTodo = [...listTodo];
    cloneListTodo[indexTodo].status = newStatus;
    setListTodo(cloneListTodo);
  };
  return (
    <div className='App'>
      <NewTodo addTodo={addTodo} />
      <ListTodo listTodo={listTodo} deleteTodo={deleteTodo} changeStatusTodo={changeStatusTodo} />
    </div>
  );
}

export default App;
