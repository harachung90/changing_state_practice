import React from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = React.useState(0)
  function handlePlus() {
  setCounter(prevState => prevState + 1);
  }

  function handleMinus() {
    setCounter(prevState => prevState - 1);
  }

  return (
    <div className="App">
      <div className="counter">
        <button className="counter--minus"
                onClick={handleMinus}>
          –</button>
        <div className="counter--count">
          <h1>{counter}</h1>
        </div>
        <button className="counter--plus"
                onClick={handlePlus}>
        +</button>
      </div>
    </div>
  );
}

export default App;