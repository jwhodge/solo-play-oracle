import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actionOrQuestion: "",
  oracleInput: "",
};

export const oracleSlice = createSlice({
  name: "oracle",
  initialState,
  reducers: {
    chooseActionOrQuestion: (state, action) => {
      state.actionOrQuestion = action.payload;
    },
    updateOracleInput: (state, action) => {
      state.oracleInput = action.payload;
    },
  },
});

export const { chooseActionOrQuestion, updateOracleInput } =
  oracleSlice.actions;

export const selectActionOrQuestion = (state) =>
  state.oracleSlice.actionOrQuestion;
export const selectOracleInput = (state) => state.oracleSlice.oracleInput;

export default oracleSlice.reducer;
