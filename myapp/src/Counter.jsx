import React, { useState } from 'react';

const Counter = () => {
  const [state, setState] = useState(0);

  const increase = () => {
    setState(state + 1);
  };

  const reset = () => {
    setState(0);
  };

  const decrease = () => {
    setState(state - 1);
  };

  return (
    <div className="container">
      <h1>Counter Component</h1>
      <h2>{state}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
