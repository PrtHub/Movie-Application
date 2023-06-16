import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contents: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const item = state.contents.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.contents.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.contents = state.contents.filter(
        (item) => item.id !== action.payload
      );
    },
    resetList: (state) => {
      state.contents = [];
    },
  },
});

export const { addToFav, removeItem, resetList } = favSlice.actions;

export default favSlice.reducer;