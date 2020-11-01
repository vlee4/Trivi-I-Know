import React from "react";
import {connect} from "react-redux";
import {pickQuestions} from "../Store/questionsReducer";
import {activateGame} from "../Store/gameStatsReducer";

class Start extends React.Component{
  constructor(){
    super()
    this.state = {
      nameInput: "",
      disabled: true,
    }
    this.inputVal = React.createRef();
    this.toggleButton = this.toggleButton.bind(this);
    this.startGame = this.startGame.bind(this);
  }
  //Note for later: may not need to put nameInput in state
  toggleButton(){
    let input = this.inputVal.current.value;
    let btnState = input.trim().length? false: true;
    this.setState({nameInput: this.inputVal, disabled: btnState})
  }
  startGame(){
    try{
      console.log(`Starting Game for ${this.inputVal.current.value}!`);
      this.props.fetchQuestions();
      this.props.beginGame(this.inputVal.current.value);

    }catch(error){
      console.log("Error starting game:", error)
    }
  }

  render(){
  return(
    <div className="start">
      <div>Welcome to Trivi-I-Know</div>
      <div>Score board would go here</div>
      <div className="playerInput">
      <label htmlFor="name">Player Name: </label>
      <input name="name" type="text" placeholder="Please enter your name" ref={this.inputVal} onChange={this.toggleButton}/>
      <button type="button" disabled={this.state.disabled} onClick={this.startGame}>Start Game</button>
      </div>
     </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => dispatch(pickQuestions()),
    beginGame: (name) => dispatch(activateGame(name))
  }
}

export default connect(null, mapDispatchToProps)(Start);
