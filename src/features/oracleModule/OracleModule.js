import React from "react";
import { useDispatch } from "react-redux";
import { store } from "../../app/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faEye } from "@fortawesome/free-solid-svg-icons";

import { chooseActionOrQuestion, updateOracleInput } from "./oracleSlice";
import { chooseAdvantage } from "../diceRollerModule/diceRollerSlice";
import { updateFeed } from "../feedModule/feedSlice";

import { oracleRollConstructor } from "../../SharedFunctions";
import {
  actionOutcomes,
  questionOutcomes,
  feedTypeLabels,
} from "../../oracle-outcomes";

function DmOracleModule(props) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const getState = store.getState();
    let mdOut = oracleRollConstructor(
      getState.oracle.actionOrQuestion,
      actionOutcomes,
      questionOutcomes,
      getState.oracle.oracleInput,
      getState.diceRoller.adv,
      feedTypeLabels,
      2
    );
    dispatch(updateFeed(mdOut));
    e.target.reset();
  };

  return (
    <div className="controlUnitWrap" id="Oracle">
      <div className="controlHeader">
        <h3>
          <FontAwesomeIcon icon={faEye} className="faIcon" /> Oracle
        </h3>
        <FontAwesomeIcon
          icon={faCaretUp}
          id="expandIcon1"
          className="faIcon fa-rotate-180"
          onClick={props.reduceOrExpand}
        />
      </div>
      <form id="oracle" className="reduced" onSubmit={handleSubmit}>
        <div className="formSection tooltip">
          <span className="tooltiptext">
            Do you ask a question OR take an action?
          </span>
          <label className="visuallyhidden" htmlFor="action-selection">
            Action or Question?
          </label>
          <select
            className="formField"
            id="action-selection"
            name="actionSelector"
            onChange={(e) => dispatch(chooseActionOrQuestion(e.target.value))}
            defaultValue="todo"
          >
            <option value="todo">Action or Question?</option>
            <option value="action">Action</option>
            <option value="question">Question</option>
          </select>
        </div>
        <div className="formSection tooltip">
          <span className="tooltiptext">
            Complete the sentence ... <br />
            'I would like to ... ACTION' or
            <br />
            'Does the NPC ... QUESTION'
          </span>
          <label className="visuallyhidden" htmlFor="text-entry-area">
            Enter your action or question:
          </label>
          <input
            type="textarea"
            className="textInput"
            id="text-entry-area"
            name="actionEntry"
            placeholder="Enter action eg. 'climb a tree'"
            onChange={(e) => dispatch(updateOracleInput(e.target.value))}
          />
        </div>
        <div className="formSection tooltip">
          <span className="tooltiptext">
            Select if you have advantage or disadvantage.
          </span>
          <label className="visuallyhidden" htmlFor="advantage-state-chooser">
            Advantage or Disadvantage?
          </label>
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
        <div className="formSection">
          <label className="visuallyhidden" htmlFor="oracle-submit">
            Roll the dice
          </label>
          <input
            type="submit"
            name="diceResult"
            value="Roll for answers!"
            className="formBtn"
            id="oracle-submit"
          />
        </div>
      </form>
    </div>
  );
}

export default DmOracleModule;
