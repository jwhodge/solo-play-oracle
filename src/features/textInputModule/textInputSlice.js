import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  manualInput: "",
};

export const textInputSlice = createSlice({
  name: "textInput",
  initialState,
  reducers: {
    updateManualInput: (state, action) => {
      state.manualInput = action.payload;
    },
  },
});

export const { updateManualInput } = textInputSlice.actions;

export const selectManual = (state) => state.textInput.manualInput;

export default textInputSlice.reducer;
