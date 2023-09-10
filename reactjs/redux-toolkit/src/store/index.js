import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, todoSlice } from '../redux';
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(counterSlide.middleware),
});
