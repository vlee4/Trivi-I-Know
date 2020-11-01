import './App.css';
import React from "react";
import Start from "./Components/Start";
import Question from "./Components/Question";
import Results from "./Components/Results";
import {connect} from "react-redux";

class App extends React.Component {
  render(){
    let {phase} = this.props ? this.props.gameStats: null;

    if(!this.props.gameStats.phase){
      return(
        <div className="App">
        <h2 className="loading">Loading...</h2>
      </div>
    )
  }
  else {
    return (
      <div className="App">
      <h1 id="gameName">Trivi-I-Know</h1>
      {phase==="start"? (<Start/>):(phase==="questions"?(<Question/>):(<Results/>))}
      </div>
      );
    }
  }
}

const mapStatetoProps = (state) => {
  return{
    questions: state.questions,
    gameStats: state.gameStats,
  }
}

export default connect(mapStatetoProps)(App);
