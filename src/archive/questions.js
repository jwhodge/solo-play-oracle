import "./App.css";
import React from "react";

function Questions(props) {
  return (
    <div>
      <div className="headingPanel">
        <h2>Can I do a thing?</h2>
        <p>
          To get a ruling on whether an action is possible or what answer you'll
          get to a question you can use the form to ask the oracle.
        </p>
        <p>
          The oracle will then give you an answer and a DC you need to roll to
          succeed on your action.
        </p>
      </div>
      <div className="inputPanel">
        <h2>What would you like to do?</h2>
        <p>
          It is best if you can phrase your query as either an action or a
          question.
        </p>
        <div className="indent">
          <li>
            ACTION: eg. <strong>I'd like to ... </strong>
            'climb this wall to see what is on the other side.'
          </li>
          <li>
            QUESTION: eg. <strong>I'd like to ... </strong>
            'ask the shopkeepr if they have any milk.'
          </li>
        </div>
        <form onSubmit={props.handleSubmitQuestion}>
          <div className="formSection">
            <h3>Enter the action you'd like to try </h3>
            <label>
              {" "}
              I'd like to:{"  "}
              <input
                type="text"
                name="diceResult"
                value={props.playerAction}
                onChange={props.handleChange}
                className="textInput"
              />
            </label>
          </div>
          <p>Now select advantage or disadvantage and roll the dice.</p>
        </form>
      </div>
    </div>
  );
}
export default Questions;
