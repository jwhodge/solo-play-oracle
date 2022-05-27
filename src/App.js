import "./App.css";
import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectNatural } from "./features/feedModule/feedSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceD20,
  faCopy,
  faInfoCircle,
  faQuestionCircle,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import DiceRollModule from "./features/diceRollerModule/DiceRollerModule";
import DmOracleModule from "./features/oracleModule/OracleModule";
import ImmersionModule from "./features/immersionModule/ImmersionModule";
import CombatAiModule from "./features/combat/CombatAiModule";
import CombatVariationModule from "./features/combat/CombatVariationModule";
import FeedModule from "./features/feedModule/FeedModule";
import TextInputModule from "./features/textInputModule/TextInputModule";
import DifficultyCheckModule from "./features/dcModule/DifficultyCheckModule";
import PopUp from "./PopUpModule";

import * as Functions from "./SharedFunctions";

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContentSource, setPopupSource] = useState("");

  const toggleVisibility = (event) => {
    console.log(event.currentTarget.value);
    setPopupSource(event.currentTarget.value);
    setPopupVisible(!popupVisible);
  };

  const reduceOrExpand = (event) => {
    event.preventDefault();
    let iconId = event.currentTarget.id;
    let targetParent = event.currentTarget.parentNode.parentNode;
    let findForm = targetParent.getElementsByTagName("form")[0];
    let theFormId = findForm.getAttribute("id");
    Functions.reduceOrExpand(theFormId, "reduced");
    Functions.reduceOrExpand(iconId, "fa-rotate-180");
  };

  const darkOrLight = (event) => {
    event.preventDefault();
    Functions.reduceOrExpand("root", "light");
  };

  const mdDownloadSource = useSelector(selectNatural);

  return (
    <div className="pageWrapper">
      <div className="headerWrapper">
        <div className="title">
          <div className="logo">
            <FontAwesomeIcon icon={faDiceD20} size="3x" className="faIcon" />
          </div>
          <div className="pageTitle">
            <h1>RPG Solitaire Engine</h1>
          </div>
        </div>
        <div className="controlBtnDiv">
          <button
            className="copyBtn"
            name="copyBtn"
            title="Copy feed as Markdown"
            onClick={() =>
              navigator.clipboard.writeText(
                mdDownloadSource.replace(/(<([^>]+)>)/gi, "")
              )
            }
          >
            <FontAwesomeIcon icon={faCopy} size="2x" />
          </button>
          <button
            className="copyBtn"
            name="aboutVisible"
            title="About RPG Solitaire Engine"
            value="about"
            onClick={(e) => toggleVisibility(e)}
          >
            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
          </button>
          <button
            className="copyBtn"
            name="helpVisible"
            title="About RPG Solitaire Engine"
            value="help"
            onClick={(e) => toggleVisibility(e)}
          >
            <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
          </button>
          <button
            className="copyBtn"
            name="darkModeSwitch"
            title="Dark or Light Mode"
            value="darkLight"
            onClick={darkOrLight}
          >
            <FontAwesomeIcon icon={faSun} size="2x" />
          </button>
        </div>
      </div>
      <div className="storyPanel">
        <FeedModule />
        <TextInputModule />
      </div>
      <div className="controlWrapper">
        <DmOracleModule reduceOrExpand={reduceOrExpand} />
        <DifficultyCheckModule reduceOrExpand={reduceOrExpand} />
        <ImmersionModule reduceOrExpand={reduceOrExpand} />
        <CombatAiModule reduceOrExpand={reduceOrExpand} />
        <CombatVariationModule reduceOrExpand={reduceOrExpand} />
        <DiceRollModule reduceOrExpand={reduceOrExpand} />
      </div>
      {popupVisible ? (
        <PopUp
          popUpContent={popupContentSource}
          toggleVisibility={toggleVisibility}
        />
      ) : null}
    </div>
  );
}
export default App;
