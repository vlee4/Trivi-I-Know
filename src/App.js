import './App.css';
import Start from "./Components/Start";
import Question from "./Components/Question"
import Results from "./Components/Results";
// import QandA from "./Apprentice_TandemFor400_Data.json";
import {connect} from "react-redux";

function App(props) {
  let {gamePhase} = props ? props.gameStats: null;

 //Chose questions for the round
  // function choose(QandA){
  //   let chosen = [];
  //   let counter = 0;
  //   while(counter<10){
  //     let index = Math.floor(Math.random()*(QandA.length))
  //     chosen.push(QandA[index]);
  //     counter++;
  //   }
  //   console.log(chosen);
  //   return chosen;
  // }
  // choose(QandA)

  if(!gamePhase){
    return(
      <div className="App">
        <h2>Loading...</h2>
      </div>
    )
  }
  else{
    console.log("Current game phase: ", gamePhase);
    return (
      <div className="App">
      <h1 id="gameName">Trivi-I-Know</h1>
      {gamePhase==="start"? (<Start/>):(gamePhase==="questions"?(<Question/>):(<Results/>))}
      {/* <Start/> */}
      {/* <Question/> */}
      {/* <Results/> */}
      </div>
      );
    }
}

const mapStatetoProps = (state) => {
  return{
    questions: state.questions,
    gameStats: state.gameStats,
  }
}

export default connect(mapStatetoProps)(App);
