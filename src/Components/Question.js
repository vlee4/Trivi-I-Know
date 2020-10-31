import React from "react";

function Question(){
  return(
    <div className="question">
      <div className="topBanner">
      <div>Question #/10</div>
      <div className="navQuestions">
        <button>Previous</button>
        <button>Next</button>
        </div></div>
      <form className="playerInput">
        <h3>Here's your question?</h3>
        <div className="answer">
          <input name="A1" type="radio" placeholder="Create map function to display question's 4 answers"/>
          <label htmlFor="A1">Answer 1</label>
        </div>
        <div className="answer">
          <input name="A2" type="radio" placeholder="Create map function to display question's 4 answers"/>
          <label htmlFor="A1">Answer 2</label>
        </div>
        <div className="answer">
          <input name="A3" type="radio" placeholder="Create map function to display question's 4 answers"/>
          <label htmlFor="A1">Answer 3</label>
        </div>
        <div className="answer">
          <input name="A4" type="radio" placeholder="Create map function to display question's 4 answers"/>
          <label htmlFor="A1">Answer 4</label>
        </div>


          <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default Question;
