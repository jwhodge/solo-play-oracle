import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faTerminal } from "@fortawesome/free-solid-svg-icons";

import { updateFeed } from "../feedModule/feedSlice";
import { updateManualInput, selectManual } from "./textInputSlice";

import { tagConstructor } from "../../SharedFunctions";
import { feedTypeLabels } from "../../oracle-outcomes";

function TextInputModule() {
  const dispatch = useDispatch();
  const playerText = useSelector(selectManual);

  const playerTextInput = (e) => {
    e.preventDefault();
    console.log(playerText);
    let tag = tagConstructor(feedTypeLabels, 7);
    dispatch(updateFeed(tag.concat(playerText)));
    e.target.reset();
  };

  return (
    <div className="inputField">
      <div className="inputIcon">
        <FontAwesomeIcon icon={faTerminal} className="faIcon blink" />
      </div>
      <form className="inputText" onSubmit={playerTextInput}>
        <input
          id="mainTextInput"
          type="text"
          name="playerInput"
          onChange={(e) => dispatch(updateManualInput(e.target.value))}
        />
        <button className="textSubmitBtn" type="submit">
          <FontAwesomeIcon
            icon={faKeyboard}
            className="faIcon submitBtn"
            size="xl"
          />{" "}
          Submit
        </button>
      </form>
    </div>
  );
}

export default TextInputModule;
