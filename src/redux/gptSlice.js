import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showSearchView: false,
  },
  reducers: {
    toggleSearchview: (state) => {
      state.showSearchView = !state.showSearchView;
    },
  },
});

export const { toggleSearchview } = gptSlice.actions;

export default gptSlice.reducer;
