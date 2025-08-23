import React, { useState } from "react";

const Form = () => {

    const[state, setState] = useState("")

    const submit = (e) => {
        
    }

  return (
    <div className="cont">
        <h1>Form compnent</h1>
        <form>
            <input type="text" placeholder="Enter your name"></input>
            <br></br>
            <br></br>
            <button onclik={submit}>submit</button>
        </form>

    </div>
  );
};
export default Form;
