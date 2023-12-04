import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  avatar: localStorage.getItem("avatar") ? true : false,
  nickname: localStorage.getItem("nickname") ? true : false,
  userId: localStorage.getItem("userId") ? true : false,
  isLogin: localStorage.getItem("accessToken") ? true : false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const newState = action.payload;
      return { ...newState, isLogin: true };
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
