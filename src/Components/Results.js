import React from "react";

function Results() {
  return(
    <div className="results">
      <h2>Congratulations [player name]!</h2>
      <h3>Your score is: x/10</h3>

      <div className="resultBtns">
        <button>Return to Start</button>
        <button>Restart game</button>
      </div>

    </div>
  )
}

export default Results;
