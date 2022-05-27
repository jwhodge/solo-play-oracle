import "./App.css";
import React from "react";
import * as OracleConstants from "../oracle-outcomes";
import * as Functions from "../SharedFunctions";

const actionOutcomes = OracleConstants.actionOutcomes;
const difficultyCheck = OracleConstants.difficultyCheck;
const dcDie = OracleConstants.difficultyCheck[0];

function lookupOutcomes(arr, option) {
  let x = option;
  return arr[x];
}

function Answers(props) {
  let actionObj = lookupOutcomes(actionOutcomes, props.result);
  let dcObj = lookupOutcomes(
    difficultyCheck,
    Functions.parseAdvantage(actionOutcomes.advantage, 1, dcDie.useDie)
  );
  return (
    <div className="answerPanel">
      <h2>Results</h2>
      <div className="response">
        <p>
          I checked and ...{" "}
          <strong>
            {actionObj.result} {props.action}
          </strong>
        </p>
        <p>
          {actionObj.additional} {actionObj.message}.
        </p>
        <p>
          {actionObj.difficultyCheck} {dcObj.description}
        </p>
        <p>{actionObj.instruction}</p>
      </div>
    </div>
  );
}
export default Answers;
