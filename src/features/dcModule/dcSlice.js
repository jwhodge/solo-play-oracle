import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dcType: "",
  playerDc: "",
};

export const dcSlice = createSlice({
  name: "difficultyCheck",
  initialState,
  reducers: {
    getDcType: (state, action) => {
      state.dcType = action.payload;
    },
    getPlayerDc: (state, action) => {
      state.playerDc = action.payload;
    },
  },
});

export const { getDcType, getPlayerDc } = dcSlice.actions;

export const selectDcType = (state) => state.difficultyCheck.dcType;
export const selectPlayerDC = (state) => state.difficultyCheck.playerDc;

export default dcSlice.reducer;
