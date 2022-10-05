import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  password: null,
  isAuth: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state, action) {
      state.isAuth = action.payload
    }
  }
})
export const { logOut } = authSlice.actions
export default authSlice.reducer
