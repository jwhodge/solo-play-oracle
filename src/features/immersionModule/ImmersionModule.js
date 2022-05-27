import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectImmersionOption, selectImmersion } from "./immersionSlice";
import { updateFeed } from "../feedModule/feedSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faPersonSwimming } from "@fortawesome/free-solid-svg-icons";

import { feedTypeLabels, immersionTables } from "../../oracle-outcomes";
import { immersionMarkdownConstructor } from "../../SharedFunctions";

function ImmersionModule(props) {
  const dispatch = useDispatch();
  const imm = useSelector(selectImmersion);

  const handleImmersionRoll = (e) => {
    e.preventDefault();
    let mdOut = immersionMarkdownConstructor(
      immersionTables,
      imm,
      feedTypeLabels,
      1
    );
    dispatch(updateFeed(mdOut));
  };

  return (
    <div className="controlUnitWrap" id="immersionModule">
      <div className="controlHeader">
        <h3>
          <FontAwesomeIcon icon={faPersonSwimming} className="faIcon" />{" "}
          Immersion
        </h3>
        <FontAwesomeIcon
          icon={faCaretUp}
          className="faIcon fa-rotate-180"
          id="expandIcon6"
          onClick={props.reduceOrExpand}
        />
      </div>
      <form id="immersion" className="reduced" onSubmit={handleImmersionRoll}>
        <div className="formSection tooltip">
          <span className="tooltiptext">
            Choose an option and roll for a story immersion cue.
          </span>
          <label className="visuallyhidden" htmlFor="immersion-selection">
            Immersion Options
          </label>
          <select
            className="formField"
            id="immersion-selection"
            name="immersionSelector"
            onChange={(e) => dispatch(selectImmersionOption(e.target.value))}
            defaultValue="select"
          >
            <option value="select">Select Immersion option</option>
            <option value="general">Get a general cue</option>
            <option value="specific">Get a more specific cue</option>
            <option value="smell">Smell cues</option>
            <option value="sound">Sound cues</option>
            <option value="visual">Visual cues</option>
            <option value="touch">Touch cues</option>
            <option value="social">Social cues</option>
            <option value="sense">Sense cues</option>
          </select>
        </div>

        <div className="formSection">
          <label className="visuallyhidden" htmlFor="immersion-submit">
            Roll the dice
          </label>
          <input
            type="submit"
            name="diceResult"
            value="Roll for Immersion!"
            className="formBtn"
            id="immersion-submit"
          />
        </div>
      </form>
    </div>
  );
}

export default ImmersionModule;
