import './App.css';
// import Start from "./Components/Start";
import Question from "./Components/Question"
// import Results from "./Components/Results";
import QandA from "./Apprentice_TandemFor400_Data.json";

function App() {
 //Chose questions for the round
  function choose(QandA){
    let chosen = [];
    let counter = 0;
    while(counter<10){
      let index = Math.floor(Math.random()*(QandA.length))
      chosen.push(QandA[index]);
      counter++;
    }
    console.log(chosen);
    return chosen;
  }
  choose(QandA)


  return (
    <div className="App">
      <h1 id="gameName">Trivi-I-Know</h1>
      {/* <Start/> */}
      <Question/>
      {/* <Results/> */}
    </div>
  );
}

export default App;
