import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userSettingSlice } from './slice/userSlice';
import { authApi } from '../services/authService';

export const store = configureStore({
  reducer: {
    [userSettingSlice.name]: userSettingSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
});
setupListeners(store.dispatch);
