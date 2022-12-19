import React from 'react';
import './App.css';
import Count from './Count';

function App() {

  const [counter, setCounter] = React.useState(0)

  function handlePlus() {
    // also can be setCounter(prevState => prevState + 1)
    // or can be a function such as
    // setCount(function(oldValue) {
    // return oldValue + 1
    // })
  setCounter(counter + 1);
  }

  function handleMinus() {
    // also can be setCounter(prevState => prevState - 1)
    // or can be a function such as
    // setCount(function(oldValue) {
    // return oldValue - 1
    // })
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <div className="counter">
        <button className="counter--minus"
                onClick={handleMinus}>
          –</button>
{/*        <div className="counter--count">
          <h1>{counter}</h1>
        </div>*/}
        <Count number={counter}/>
        <button className="counter--plus"
                onClick={handlePlus}>
        +</button>
      </div>
    </div>
  );
}

export default App;
