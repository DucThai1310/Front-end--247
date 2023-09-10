import { useReducer } from 'react';
import { createContext } from 'react';
import { todoReducer } from '../reducer/todoReducer';


export const TodoContext = createContext(undefined);

export const TodoProvider = ({ children }) => {
  const [listTodo, dispatch] = useReducer(todoReducer, []);

  return <TodoContext.Provider value={{ listTodo, dispatch }}>{children}</TodoContext.Provider>;
};
