import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { updateFeed } from "../feedModule/feedSlice";
import { combatTactics, feedTypeLabels } from "../../oracle-outcomes";
import { generateOptionsFromList, tagConstructor } from "../../SharedFunctions";

const CombatAiModule = (props) => {
  const [tacticSelector, setTactic] = useState("");
  const [oppositionSelector, setOpposition] = useState("");

  const handleOptionGeneration = (event) => {
    setOpposition(event.target.value);
    generateCombatantStatus(combatTactics, event.target.value);
  };

  useEffect((oppositionSelector) => {
    document.body.onload = generateOptionsFromList(
      combatTactics,
      "opposition-selection",
      0,
      combatTactics.length,
      "combatantLabel"
    );
    document.body.onload = generateCombatantStatus(
      combatTactics,
      oppositionSelector
    );
  }, []);

  const getTactic = (event) => {
    event.preventDefault();
    let tactic = tacticSelector;
    let source = 0;
    combatTactics.forEach((element) => {
      if (element.name === oppositionSelector) {
        source = element.id;
      }
    });
    let markdown = combatTactics[source][tactic];
    let opponent = combatTactics[source].combatantLabel;
    let tag = tagConstructor(feedTypeLabels, 5);
    let mdOut = tag.concat("The ***", opponent, "*** will ", markdown);
    setTactic("");
    event.target.reset();
    return mdOut;
  };
  const dispatch = useDispatch();
  return (
    <div className="controlUnitWrap" id="Combat AI">
      <div className="controlHeader">
        <h3>
          <FontAwesomeIcon icon={faShield} className="faIcon" /> Combat AI
        </h3>
        <FontAwesomeIcon
          icon={faCaretUp}
          id="expandIcon2"
          className="faIcon fa-rotate-180"
          onClick={props.reduceOrExpand}
        />
      </div>
      <form
        className="reduced"
        id="combatAi"
        onSubmit={(e) => dispatch(updateFeed(getTactic(e)))}
      >
        <div className="formSection tooltip">
          <span className="tooltiptext">
            Select the attacker you want a move for.
          </span>
          <label className="visuallyhidden" htmlFor="opposition-selection">
            Attacker Type?
          </label>
          <select
            className="formField"
            id="opposition-selection"
            name="oppositionSelector"
            onChange={(e) => handleOptionGeneration(e)}
          ></select>
        </div>
        <div className="formSection tooltip">
          <span className="tooltiptext">
            Select the first option that is true / possible.
          </span>
          <label className="visuallyhidden" htmlFor="tactic-chooser">
            Choose Tactic
          </label>
          <select
            className="formField"
            id="tactic-chooser"
            name="tacticSelector"
            onChange={(e) => setTactic(e.target.value)}
          ></select>
        </div>
        <div className="formSection">
          <label className="visuallyhidden" htmlFor="combat-submit">
            Roll the dice
          </label>
          <input
            type="submit"
            name="diceResult"
            value="Roll for tactic!"
            className="formBtn"
            id="combat-submit"
          />
        </div>
      </form>
    </div>
  );
};

function generateCombatantStatus(arr, name) {
  const location = document.getElementById("tactic-chooser");
  let newOption = document.createElement("option");

  location.innerHTML = "";
  location.appendChild(newOption);
  newOption.value = "";
  newOption.appendChild(document.createTextNode("Select Attacker Status"));

  arr.forEach((element) => {
    if (element.name === name) {
      let source = Object.keys(element);
      source.forEach((e, i) => {
        if (i > 4) {
          let label = arr[0].options[e];
          let newOption = document.createElement("option");
          location.appendChild(newOption);
          newOption.value = [e];
          newOption.appendChild(document.createTextNode(label));
        }
      });
    }
  });
}

export default CombatAiModule;
