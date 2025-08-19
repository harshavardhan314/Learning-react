
import React, { useState } from 'react';

const Toggle=()=>{
    const on=()=>{
    setState("OFF")
}
const off=()=>{
    setState("ON")
}

    const [State,setState]=useState("ON")
    return(
        <div className="toggle">
            <h1>Toggle component</h1>
            <h1>{State}</h1>
            <button onClick={on}>ON</button>
            <button onClick={off}>OFF</button>
        </div>
    )
}

export default Toggle;