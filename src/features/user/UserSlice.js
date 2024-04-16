import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  token: "",
  refreshToken: "",
  id: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.id = action.payload.id;
    },
    setTokensUser: (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null
      state.refreshToken = null
      state.id = null;
    },
  },
});

export const { setUser, removeUser, setTokensUser } = userSlice.actions;
export default userSlice.reducer;
