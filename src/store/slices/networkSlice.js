import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOnline: navigator.onLine,
};

export const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setOnlineStatus: (state, action) => {
      state.isOnline = action.payload;
    },
  },
});

export const { setOnlineStatus } = networkSlice.actions;

export default networkSlice.reducer;