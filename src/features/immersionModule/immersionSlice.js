import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  optionSelector: "general",
};

export const immersionSlice = createSlice({
  name: "immersion",
  initialState,
  reducers: {
    selectImmersionOption: (state, action) => {
      state.optionSelector = action.payload;
    },
  },
});

export const { selectImmersionOption } = immersionSlice.actions;

export const selectImmersion = (state) => state.immersion.optionSelector;

export default immersionSlice.reducer;
