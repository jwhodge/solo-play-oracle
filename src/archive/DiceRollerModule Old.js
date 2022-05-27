import "./App.css";
import React from "react";

function diceRoll(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function parseAdvantage(select, min, max) {
  let arr = [diceRoll(min, max), diceRoll(min, max)];
  console.log(arr);
  switch (select) {
    case "std":
      return arr[0];
    case "adv":
      if (arr[0] < arr[1]) {
        return arr[1];
      }
      return arr[0];
    case "dis":
      if (arr[0] < arr[1]) {
        return arr[0];
      }
      return arr[1];
    default:
      return arr[0];
  }
}

class DiceRollModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceResult: "...",
      withAdvantage: "std",
    };
    this.handleAdvantage = this.handleAdvantage.bind(this);
    this.handleRollDice = this.handleRollDice.bind(this);
  }

  handleAdvantage(event) {
    this.setState({ withAdvantage: event.target.value });
  }

  handleRollDice(event) {
    let x = parseAdvantage(this.state.withAdvantage, 1, this.props.dieRequired);
    event.preventDefault();
    this.setState({ diceResult: x });
    this.props.getDiceResult(x);
  }

  render() {
    return (
      <div className="diceControl">
        <h2>Dice Controls</h2>
        <form onSubmit={this.handleRollDice}>
          <div className="formSection">
            <ChooseDice
              onOff={this.props.canChooseDie}
              passHandler={this.props.dieChoice}
            />
            <h3>Advantage or Disadvantage?</h3>
            <select className="formField" onChange={this.handleAdvantage}>
              <option selected value="std">
                Neither
              </option>
              <option value="adv">Advantage</option>
              <option value="dis">Disadvantage</option>
            </select>
          </div>
          <div className="formSection">
            <h3>Roll the dice</h3>
            <input
              type="submit"
              name="diceResult"
              value="Roll it!"
              className="formBtn"
            />
          </div>
          <DisplayResult
            onOff={this.props.displayResult}
            result={this.state.diceResult}
          />
        </form>
      </div>
    );
  }
}

function ChooseDice(props) {
  if (props.onOff) {
    return (
      <div className="formSection">
        <h3>Choose Your Die</h3>
        <select className="formField" onChange={props.passHandler}>
          <option value="4">D4</option>
          <option value="6">D6</option>
          <option value="8">D8</option>
          <option value="10">D10</option>
          <option value="12">D12</option>
          <option selected value="20">
            D20
          </option>
          <option value="100">D100</option>
        </select>
      </div>
    );
  }
  return null;
}

function DisplayResult(props) {
  if (props.onOff) {
    return (
      <div className="formSection">
        <h3>You rolled a {props.result}</h3>
      </div>
    );
  }
  return null;
}

export default DiceRollModule;
