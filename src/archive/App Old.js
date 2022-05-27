import "./App.css";
import React from "react";
import Questions from "./questions";
import Answers from "./answers";
import DiceRollModule from "./DiceRollerModule";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerAction: "",
      diceResult: "1",
      withAdvantage: "std",
      dieRequired: "6",
    };
    this.handleChange = this.handleChange.bind(this);
    this.getDiceResult = this.getDiceResult.bind(this);
    this.handleDieChoice = this.handleDieChoice.bind(this);
  }

  handleChange(event) {
    this.setState({ playerAction: event.target.value });
  }

  handleDieChoice(event) {
    this.setState({ dieRequired: event.target.value });
  }

  getDiceResult(dieResult) {
    this.setState({ diceResult: dieResult });
  }

  render() {
    return (
      <div className="pageBody">
        <h1>DM Oracle</h1>
        <div className="sectionWrapper">
          <div className="inputWrapper">
            <Questions handleChange={this.handleChange} />
            <DiceRollModule
              getDiceResult={this.getDiceResult}
              canChooseDie={true}
              displayResult={false}
              dieRequired={this.state.dieRequired}
              dieChoice={this.handleDieChoice}
            />
          </div>
          <Answers
            result={this.state.diceResult}
            action={this.state.playerAction}
            dc={"15"}
          />
        </div>
      </div>
    );
  }
}
export default App;
