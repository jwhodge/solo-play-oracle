import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import useCheckDc from "./useCheckDc";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleUnbalanced,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

import { getDcType, getPlayerDc } from "./dcSlice";
import { chooseAdvantage } from "../diceRollerModule/diceRollerSlice";
import { updateFeed } from "../feedModule/feedSlice";

import { skillsAndAbilities } from "../../oracle-outcomes";
import { generateOptionsFromList } from "../../SharedFunctions";
/* import { difficultyCheck, feedTypeLabels } from "../../oracle-outcomes"; */

function DifficultyCheckModule(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.onload = generateOptionsFromList(
      skillsAndAbilities,
      "dctype-selection",
      1,
      26,
      "label"
    );
  });

  /*   const checkDc = (event) => {
    event.preventDefault();
    let source = difficultyCheck;
    let state = store.getState();
    let markdown = dcManager(
      source,
      state.diceRoller.adv,
      state.difficultyCheck.dcType,
      state.difficultyCheck.playerDc,
      feedTypeLabels,
      10
    );
    event.target.reset();
    return markdown;
  }; */

  let md = useCheckDc();

  return (
    <div className="controlUnitWrap" id="DcCheck">
      <div className="controlHeader">
        <h3>
          <FontAwesomeIcon icon={faScaleUnbalanced} className="faIcon" />{" "}
          Difficulty Check
        </h3>
        <FontAwesomeIcon
          icon={faCaretUp}
          id="expandIcon5"
          className="faIcon fa-rotate-180"
          onClick={props.reduceOrExpand}
        />
      </div>
      <form
        id="difficultyCheck"
        className="reduced"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(updateFeed(md));
        }}
      >
        <div className="formSection tooltip">
          <span className="tooltiptext">
            Choose what skill or ability you'd like to use.
          </span>
          <label className="visuallyhidden" htmlFor="dctype-selection">
            Skill or ability type
          </label>
          <select
            className="formField"
            id="dctype-selection"
            name="dcTypeSelector"
            onChange={(e) => dispatch(getDcType(e.target.value))}
            defaultValue="select"
          >
            <option value="select">Select a skill or ability </option>
          </select>
        </div>
        <div className="formSection split">
          <div className="formSectionSplit tooltip twoThirdSplit">
            <span className="tooltiptext">
              Select if you have advantage or disadvantage.
            </span>
            <label
              className="visuallyhidden"
              htmlFor="advantage-state-chooser-dc"
            >
              Advantage or Disadvantage?
            </label>
            <select
              className="formField reducePadding"
              id="advantage-state-chooser-dc"
              name="dcAdvantage"
              onChange={(e) => dispatch(chooseAdvantage(e.target.value))}
              defaultValue="set"
            >
              <option value="set">Set Advantage</option>
              <option value="std">None</option>
              <option value="dis">Advantage</option>
              <option value="adv">Disadvantage</option>
            </select>
          </div>
          <div className="formSectionSplit tooltip thirdSplit">
            <span className="tooltiptext">Enter the result of your roll.</span>
            <label className="visuallyhidden" htmlFor="number-entry">
              Enter DC roll total
            </label>
            <input
              type="number"
              className="textInput reducePadding"
              id="number-entry"
              name="dcRollResult"
              placeholder="Your DC"
              onChange={(e) => dispatch(getPlayerDc(e.target.value))}
            />
          </div>
        </div>
        <div className="formSection">
          <label className="visuallyhidden" htmlFor="dc-submit">
            Check for success
          </label>
          <input
            type="submit"
            name="diceResult"
            value="Check if you succeed!"
            className="formBtn"
            id="dc-submit"
          />
        </div>
      </form>
    </div>
  );
}

export default DifficultyCheckModule;
