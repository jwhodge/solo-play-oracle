import React from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { store } from "../../app/store";
import {
  chooseDie,
  chooseAdvantage,
  rollDie,
} from "../diceRollerModule/diceRollerSlice";
import { combatVariations, feedTypeLabels } from "../../oracle-outcomes";
import { tagConstructor } from "../../SharedFunctions";
import { updateFeed } from "../feedModule/feedSlice";

function CombatVariationModule(props) {
  const dispatch = useDispatch();

  let tag = tagConstructor(feedTypeLabels, 6);

  const getVariation = (e) => {
    e.preventDefault();
    dispatch(chooseAdvantage("std"));
    dispatch(chooseDie(combatVariations[0].useDie));
    dispatch(rollDie());
    let rollResult = store.getState().diceRoller.result;
    let mdOut = tag.concat(combatVariations[rollResult].markdown);
    dispatch(updateFeed(mdOut));
  };

  return (
    <div className="controlUnitWrap" id="Combat AI">
      <div className="controlHeader">
        <h3>
          <FontAwesomeIcon icon={faDragon} className="faIcon" /> Random Combat
        </h3>
        <FontAwesomeIcon
          icon={faCaretUp}
          id="expandIcon3"
          className="faIcon fa-rotate-180"
          onClick={props.reduceOrExpand}
        />
      </div>
      <form id="randomCombat" className="reduced" onSubmit={getVariation}>
        <div className="formSection tooltip">
          <span className="tooltiptext">
            Each round roll for a potential variation to combat. It may be
            nothing but it should keep you on your toes. Roll initiative for
            this feature (like an NPC).
          </span>
          <label className="visuallyhidden" htmlFor="combat-variation-submit">
            Random Combat Roll
          </label>
          <input
            type="submit"
            name="diceResult"
            value="Roll and pray!"
            className="formBtn hotBtn"
            id="combat-variation-submit"
          />
        </div>
      </form>
    </div>
  );
}

export default CombatVariationModule;
