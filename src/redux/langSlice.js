import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "en",
  },
  reducers: {
    langChange: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { langChange } = langSlice.actions;

export default langSlice.reducer;
