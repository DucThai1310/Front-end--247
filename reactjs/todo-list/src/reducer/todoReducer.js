import { v4 as uuidv4 } from 'uuid';

export const todoReducer = (prevTodoList, action) => {
  const cloneListTodo = [...prevTodoList];
  switch (action.type) {
    case 'add':
      const todo = { id: uuidv4(), label: action.value, isDelete: false, status: 'inprogress' };
      return [...prevTodoList, todo];

    case 'delete':
      const indexTodoDelete = prevTodoList.findIndex(todo => todo.id == action.id);
      cloneListTodo[indexTodoDelete].isDelete = true;
      return cloneListTodo;

    case 'change':
      const indexTodo = prevTodoList.findIndex(todo => todo.id == action.id);
      cloneListTodo[indexTodo].status = action.newStatus;
      return cloneListTodo;
    default:
      console.log('not action!');
      return prevTodoList;
  }
};
