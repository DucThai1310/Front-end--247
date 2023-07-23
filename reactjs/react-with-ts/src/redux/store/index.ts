import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from '../slices';
import { todoApi } from '../../service/todoService';
import { setupListeners } from '@reduxjs/toolkit/dist/query';


export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todoApi.middleware),
});
setupListeners( store.dispatch );

export type RootState = ReturnType<typeof store.getState>;