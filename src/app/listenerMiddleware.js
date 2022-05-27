import { createListenerMiddleware } from "@reduxjs/toolkit";

import { updateFeed } from "../features/feedModule/feedSlice";
import { rollDie } from "../features/diceRollerModule/diceRollerSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: rollDie,
  effect: (state, listenerApi) => {
    listenerApi.dispatch(updateFeed(state.mdString));
  },
});
