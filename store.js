import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./src/redux/userSlice";
import moviesSlice from "./src/redux/moviesSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
  },
});

export default store;
