import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ListTodo from './components/ListTodo';
import NewTodo from './components/NewTodo';
import { TodoProvider } from './context';
// import { useReducerCustom } from './hooks/useReducer';

function App() {
  //useReducer custom
  // const [ listTodo, dispatch ] = useReducerCustom( taskReducer, [] );

  return (
    <div className='App'>
      <TodoProvider>
        <NewTodo />
        <ListTodo />
      </TodoProvider>
    </div>
  );
}

export default App;
