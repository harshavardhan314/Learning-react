import { useState } from "react";


function ColorPicker()
{
    const [color,setColor]=useState("#FFFFFF");
     const handleColorChange = (event) => {
        setColor(event.target.value);
    };


    return(
        <div className="container">
            <div className="picker" style={{backgroundColor:color}}>
                <p>selected color:{color}</p>
            </div>
            <label>selected color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )

}
export default ColorPicker;