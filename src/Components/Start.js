import { render } from "@testing-library/react";
import React from "react";
import {connect} from "react-redux";
import {pickQuestions} from "../Store/questionsReducer"

class Start extends React.Component{
  constructor(){
    super()
    this.state = {
      nameInput: "",
      disabled: true,
    }
    this.inputVal = React.createRef();
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(){
    let input = this.inputVal.current.value;
    let btnState = input.length? false: true;
    this.setState({nameInput: this.inputVal, disabled: btnState})
    console.log("input", input, "button state", btnState);
  }

  render(){
  return(
    <div className="start">
      <div>Welcome to Trivi-I-Know</div>
      <div>Score board would go here</div>
      <div className="playerInput">
      <label htmlFor="name">Player Name: </label>
      <input name="name" type="text" placeholder="Please enter your name" ref={this.inputVal} onChange={this.toggleButton}/>
      <button type="button" disabled={this.state.disabled}>Start Game</button>
      </div>
     </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => dispatch(pickQuestions())
  }
}

export default connect(null, mapDispatchToProps)(Start);
