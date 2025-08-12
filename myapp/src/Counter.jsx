import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const Decrease = () => {
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1); 
    };

    const Increase = () => {
        setCount(count=>count + 1);
        setCount(count=>count + 1);
        setCount(count=>count + 1);
    };

    const Reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Decrease}>Decrease</button>
            <button onClick={Increase}>Increase</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default Counter;
