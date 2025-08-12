import React, { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Harsha");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <h1>My Component</h1>
            <input value={name} onChange={handleNameChange} />
            <p>{name}</p>

            <select name="choose option" id="">
                <option value="option 1">Option 1</option>
                  <option value="option 1">Option 1</option>
                    <option value="option 1">Option 1</option>
            </select>
        </div>
    );
}

export default MyComponent;
