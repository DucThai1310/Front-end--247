import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../../types/todo';

interface IInitialState {
  todo: ITodo[];
  loading: boolean;
}
const initialState: IInitialState = {
  todo: [],
  loading: false,
};
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTodoList: (state, action) => {
      state.todo = action.payload;
      state.loading = false;
    },
    deleteTodo: (state, action) => {
      state.todo.filter((todo: ITodo) => todo.id == action.payload);
    },
    createTodo: (state, action: { payload: ITodo; type: string }) => {
      state.todo.push(action.payload);
    },
  },
});
export const { createTodo, deleteTodo, setTodoList, setLoading } = todoSlice.actions;
