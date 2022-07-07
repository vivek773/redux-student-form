import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./redux/FormSlice";

export const store = configureStore({
  reducer: {
    userDetail:userReducer
  },
})