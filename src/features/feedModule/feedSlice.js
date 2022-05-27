import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mdFeed: "",
  mdNatural: "",
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    updateFeed: (state, action) => {
      state.mdFeed = action.payload + "\r\r" + state.mdFeed;
      state.mdNatural = state.mdNatural + "\r\r" + action.payload;
    },
  },
});

export const { updateFeed } = feedSlice.actions;

export const selectFeed = (state) => state.feed.mdFeed;
export const selectNatural = (state) => state.feed.mdNatural;

export default feedSlice.reducer;
