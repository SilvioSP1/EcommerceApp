import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authUser: null,
  accessToken: null,
  requestLoading: false,
};

const storeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, action) {
      state.authUser = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setRequestLoading(state, action) {
      state.requestLoading = action.payload;
    },
  },
});

export const { setAuthUser, setAccessToken, setRequestLoading } = storeSlice.actions;
export default storeSlice.reducer;