import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: {},
};

const GenresSlice = createSlice({
  name: "Genres",
  initialState: initialState,
  reducers: {
    addGenres: (state, action) => {
      state.genres = action.payload;
    },
    removeGenres: (state, action) => {
      state.genres = {};
    },
  },
});

export default GenresSlice.reducer;
export const { addGenres } = GenresSlice.actions;
