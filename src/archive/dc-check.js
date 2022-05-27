import "./App.css";
import React from "react";

class Difficulty extends React.Component {
  render() {
    return (
      <div className="inputPanel">
        <h3>Difficulty Check</h3>
        <p>
          Well it seems it's possible but the real question is how difficult is
          it?
        </p>
        <p>Roll a D20 and add your modifier and I'll check if you succeed?</p>
        <form>
          <div className="formSection">
            <label>
              Enter your result: <input type="text" name="diffCheck" />
            </label>
          </div>
        </form>
        <p>**Pass/Fail**</p>
      </div>
    );
  }
}
export default Difficulty;
