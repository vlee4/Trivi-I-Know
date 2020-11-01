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
          <h1 id="gameName">Trivi-I-Know</h1>
        <h2 className="loading">Loading...</h2>
      </div>
    )
  }
  else {
    return (
      <div className="App">
      <h1 id="gameName">Trivi-I-Know</h1>
      {phase==="start"? (<Start/>):(phase==="questions"?(<Question/>):(<Results/>))}
      <footer>
        <div>
          <div>Last Updated: November 2020</div>
          <div><img src={"./GitHub-Mark-32px.png"} alt="GH_Logo"></img><a href="https://github.com/vlee4/Trivi-I-Know"><img src={'./public/GitHub_Logo_White.png'} alt=
          "Github"></img></a></div>

          <div>Created by vLEE</div>
        </div>
        </footer>
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
