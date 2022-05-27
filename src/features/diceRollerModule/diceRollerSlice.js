import { createSlice } from "@reduxjs/toolkit";

import { parseAdvantage } from "../../SharedFunctions";

const initialState = {
  dieChoice: 20,
  dieMin: 1,
  adv: "std",
  result: 0,
};

export const diceRollerSlice = createSlice({
  name: "diceRoller",
  initialState,
  reducers: {
    chooseDie: (state, action) => {
      state.dieChoice = action.payload;
    },
    chooseAdvantage: (state, action) => {
      state.adv = action.payload;
    },
    rollDie: (state) => {
      const outcome = parseAdvantage(state.adv, state.dieMin, state.dieChoice);
      state.result = outcome;
    },
  },
});

export const { chooseAdvantage, chooseDie, rollDie } = diceRollerSlice.actions;

export const selectResult = (state) => state.diceRoller.result;
export const selectDie = (state) => state.diceRoller.dieChoice;
export const selectAdv = (state) => state.diceRoller.adv;

export default diceRollerSlice.reducer;
