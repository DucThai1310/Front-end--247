import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    value2: 3,
  },
  reducers: {
    incremented: (state, action) => {
      state.value += action.payload ? action.payload : 1;
    },
    decremented: state => {
      state.value--;
    },
  },
});
export const { incremented, decremented } = counterSlice.actions;
