import React from "react";

function Start(){
  return(
    <div className="start">
      <div>Welcome to Trivi-I-Know</div>
      <div>Score board would go here</div>
      <div className="playerInput">
      <label htmlFor="name">Player Name: </label>
      <input name="name" placeholder="Please enter your name"/>
      <button>Start Game</button>
      </div>
     </div>
  )
}

export default Start;
