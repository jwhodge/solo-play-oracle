import "./PopUp.css";
import React from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import * as SourceText from "./pop-up-source-text";

function PopUp(props) {
  let markdown = "";
  if (props.popUpContent === "help") {
    markdown = SourceText.helpText;
  } else if (props.popUpContent === "about") {
    markdown = SourceText.aboutText;
  }
  return (
    <div className="popUpMain">
      <div className="popUpContent">
        <ReactMarkdown
          children={markdown}
          remarkPlugins={([remarkGfm], [remarkBreaks])}
        />
        <div id="closeBtn">
          <button
            className="copyBtn"
            name="closeBtn"
            title="Close Popup Window"
            value=""
            onClick={props.toggleVisibility}
          >
            <FontAwesomeIcon icon={faClose} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
