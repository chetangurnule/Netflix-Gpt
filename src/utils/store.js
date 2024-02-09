import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import GenresReducer from "./GenresSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    genres: GenresReducer,
  },
});

export default store;
