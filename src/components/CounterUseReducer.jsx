import {useReducer, useState} from "react";
import {reducer} from './counterReducer.js';

const initialState = {count: 0};

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, changeAmount] = useState('1');
  
  return <div>
    <h1> Count: {state.count}</h1>
    <input type="number" value={amount} onChange={(e) => changeAmount(e.target.value)}/>
    <button onClick={() => {
      dispatch({type: 'increment', amount: parseInt(amount)})}}>+</button>
    <button onClick={() => {
      dispatch({type: 'decrement', amount: parseInt(amount)})}}>-</button>
  </div>
}

export default CounterUseReducer;
