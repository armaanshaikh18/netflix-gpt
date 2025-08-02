import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./src/redux/userSlice";
import moviesSlice from "./src/redux/moviesSlice";
import gptSlice from "./src/redux/gptSlice";
import langSlice from "./src/redux/langSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gpt: gptSlice,
    config: langSlice,
  },
});

export default store;
