import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesData: null,
    trailerMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.moviesData = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerMovie = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
