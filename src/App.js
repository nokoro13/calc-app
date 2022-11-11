import './App.css';
import { useState } from 'react';
import { Cal } from './Cal';

const App = () => {
  const [val, setValue] = useState('');
  //clear the current input you have just entered (C)
  const clear = () => {
    try {
      setValue(val.slice(0, -1))
    } catch (error) {
    }
  }
//clear all memory on the calc (AC)
  const clearAll = () => {
    setValue('');
  }

  //safe eval (=)
  const calculate = (event) => {
    event.preventDefault();
    let result = Cal(val);
    setValue(result);
  } 

  return (
    <div className="calc-app">
    
      <div className="calc-output">
        <div className="display">{ val.length < 1 ? '0' : `${val} `}</div>
      </div>

      <button value="AC" id="delete-btn" className="big-button" onClick={()=> clearAll()}>AC</button>
      <button value="C" id="delete-btn" onClick={()=> clear()}>C</button>
      <button value="/" type="operator" className="symbol" onClick={((e)=> setValue(val + e.target.value))}>&divide;</button>
      <button value="7" onClick={(e)=> setValue(val + e.target.value)}>7</button>
      <button value="8" onClick={(e)=> setValue(val + e.target.value)}>8</button>
      <button value="9" onClick={(e)=> setValue(val + e.target.value)}>9</button>
      <button value="*" type="operator" className="symbol" onClick={(e)=> setValue(val + e.target.value)}>&times;</button>
      <button value="4" onClick={(e)=> setValue(val + e.target.value)}>4</button>
      <button value="5" onClick={(e)=> setValue(val + e.target.value)}>5</button>
      <button value="6" onClick={(e)=> setValue(val + e.target.value)}>6</button>
      <button value="-" type="operator" className="symbol" onClick={(e)=> setValue(val + e.target.value)}>-</button>
      <button value="1" onClick={(e)=> setValue(val + e.target.value)}>1</button>
      <button value="2" onClick={(e)=> setValue(val + e.target.value)}>2</button>
      <button value="3" onClick={(e)=> setValue(val + e.target.value)}>3</button>
      <button value="+" type="operator" className="symbol" onClick={(e)=> setValue(val + e.target.value)}>+</button>
      <button value="0" className="zero" onClick={(e)=> setValue(val + e.target.value)}>0</button>
      <button value="=" type="operator"className="equals" onClick={calculate}>=</button>

    </div>
  );
}

export default App;
