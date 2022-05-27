import React from "react";
import { store } from "../../app/store";

import { useDispatch } from "react-redux";
import { chooseDie, chooseAdvantage, rollDie } from "./diceRollerSlice";
import { updateFeed } from "../feedModule/feedSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { dieRollConstructor } from "../../SharedFunctions";
import { feedTypeLabels } from "../../oracle-outcomes";

function DiceRollModule(props) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(rollDie());
    const getState = store.getState();
    let mdOut = dieRollConstructor(
      getState.diceRoller.dieChoice,
      getState.diceRoller.adv,
      getState.diceRoller.result,
      feedTypeLabels,
      11
    );
    dispatch(updateFeed(mdOut));
    e.target.reset();
  };

  return (
    <div className="controlUnitWrap" id="diceRollerModule">
      <div className="controlHeader">
        <h3 id="formTitle">
          <FontAwesomeIcon icon={faDice} className="faIcon" /> Dice Roller
        </h3>
        <FontAwesomeIcon
          icon={faCaretUp}
          className="faIcon fa-rotate-180"
          id="expandIcon4"
          onClick={props.reduceOrExpand}
        />
      </div>
      <form
        id="diceRoller"
        className="rollerForm reduced"
        onSubmit={handleSubmit}
      >
        <div className="formSection" id="chooseDie">
          <select
            className="formField"
            id="die-chooser"
            onChange={(e) => dispatch(chooseDie(e.target.value))}
            defaultValue="choose"
          >
            <option value="choose">Choose A Die</option>
            <option value="4">D4</option>
            <option value="6">D6</option>
            <option value="8">D8</option>
            <option value="10">D10</option>
            <option value="12">D12</option>
            <option value="20">D20</option>
            <option value="100">D100</option>
          </select>
        </div>
        <div className="formSection tooltip" id="chooseAdv">
          <span className="tooltiptext">
            Select if you have advantage or disadvantage.
          </span>
          <select
            className="formField"
            id="advantage-state-chooser"
            name="advantageOrDisadvantage"
            onChange={(e) => dispatch(chooseAdvantage(e.target.value))}
            defaultValue="set"
          >
            <option value="set">Set Advantage</option>
            <option value="std">None</option>
            <option value="adv">Advantage</option>
            <option value="dis">Disadvantage</option>
          </select>
        </div>
        <div className="formSection" id="dieRoll">
          <input
            type="submit"
            name="diceResult"
            value="Roll it!"
            className="formBtn"
            id="dice-roll-submit"
          />
        </div>
      </form>
    </div>
  );
}

export default DiceRollModule;
