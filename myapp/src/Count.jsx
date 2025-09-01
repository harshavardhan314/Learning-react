import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Harsha");
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

    
      <button onClick={() => setName("New Name")}>Change Name</button>

      {isVisible && <p>This is visible!</p>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </div>
  );

}

export default Count;
