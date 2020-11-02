import './App.css';
import Github_Logo from"./GitHub_Logo_White.png";
import GH_Logo from "./GitHub-Mark-32px.png";
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
      {/* <h1 id="gameName" className="glow">Trivi-I-Know</h1> */}
      <h1 id="gameName" className="glow">
        <span style={{color: "#c53b50"}}>T</span>
        <span style={{color: "#19a0b4"}}>r</span>
        <span style={{ color: "#d86b90"}}>i</span>
        <span style={{color:" #8aac85"}}>v</span>
        <span style={{ color: "#69476d"}}>i</span>
        <span>-</span>
        <span style={{color: "#e56105"}}>I</span>
        <span>-</span>
        <span style={{color: "#409b8a"}}>K</span>
        <span style={{color: "#f2c73a"}}>n</span>
        <span style={{color: "#dc3349"}}>o</span>
        <span style={{ color: "#ea6794"}}>w</span>
        </h1>
      {phase==="start"? (<Start/>):(phase==="questions"?(<Question/>):(<Results/>))}
      <footer>
        <div className="footer_content">
          <div>Last Updated: November 2020</div>
          <div>Created by vLEE</div>
          <div>
            <a href="https://github.com/vlee4/Trivi-I-Know">
              <img src={GH_Logo} alt="GH_Logo"></img>
              <img src={Github_Logo} alt="Github"style={{width: "5%", height: "auto"}}></img>
            </a>
          </div>
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
