import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
    loading: true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTodoList: (state, action) => {
      state.todo = action.payload;
      state.loading = false;
    },
    deleteTodo: (state, action) => {
      state.todo.filter(todo => todo.id == action.payload);
    },
    createTodo: (state, action) => {
      state.todo.push(action.payload);
    },
  },
});
export const { createTodo, deleteTodo, setTodoList,setLoading } = todoSlice.actions;
