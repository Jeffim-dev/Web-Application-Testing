import React, {useState}from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Display from "./Display";

function App() {
 
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

    const strike = () => {
      if (strikes === 2) {
        setStrikes(0)
        setBalls(0)
      }
      else{
        setStrikes(strikes + 1)
      }
    }

    const ball = () =>{
      if (balls === 3) {
        setBalls(0)
        setStrikes(0)
      }
      else {
        setBalls(balls + 1)
      }
    }
    
    const hit =() =>{
      setStrikes(0)
      setBalls(0)
    }

    const foul = () =>{
      if (strikes === 2){
        setStrikes(2) 
      } else {
        setStrikes(strikes + 1)
      }
    }    

  return (
    <div className="scoreboard">
      <Display strikes={strikes} balls={balls}/>
      <Dashboard ball={ball} strike={strike} hit={hit} foul={foul} />
    </div>
  );
}

export default App;
