import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    listTodo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.listTodo.push(action.payload);
    },
    deleteToDo: (state, action) => {
      state.listTodo.splice(action.payload, 1);
    },
  },
});
export const { addTodo, deleteToDo } = todoSlice.actions;
