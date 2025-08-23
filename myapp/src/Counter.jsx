
import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable "count"
  const [count, setCount] = useState(0);

  // Functions to update count
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter Component</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
