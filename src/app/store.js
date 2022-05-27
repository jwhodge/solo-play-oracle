import { configureStore } from "@reduxjs/toolkit";

import diceRollerReducer from "../features/diceRollerModule/diceRollerSlice.js";
import feedSliceReducer from "../features/feedModule/feedSlice.js";
import immersionSliceReducer from "../features/immersionModule/immersionSlice.js";
import dcSliceReducer from "../features/dcModule/dcSlice.js";
import oracleSliceReducer from "../features/oracleModule/oracleSlice.js";
import textInputSliceReducer from "../features/textInputModule/textInputSlice.js";

export const store = configureStore({
  reducer: {
    diceRoller: diceRollerReducer,
    feed: feedSliceReducer,
    immersion: immersionSliceReducer,
    difficultyCheck: dcSliceReducer,
    oracle: oracleSliceReducer,
    textInput: textInputSliceReducer,
  },
});
