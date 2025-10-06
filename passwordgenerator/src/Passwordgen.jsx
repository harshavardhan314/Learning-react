import React, { useState } from 'react'

const Passwordgen = () => {
    const [length,setLength]=useState(6)
  return (
    <div className="pass-container bg-black w-full h-lvh flex justify-center items-center">
      <div className="password-generator bg-blue-300 w-[400px] p-6 rounded-2xl shadow-lg">
        
        <h1 className="text-center text-2xl font-bold mb-6 text-black">
          Password Generator
        </h1>

        {/* input with copy button */}
        <div className="relative mb-6">
          <input
            type="text"
            className="bg-white w-full p-3 pr-16 rounded-2xl outline-none text-black "
            placeholder="password"
          />
          <button
            className="shrink-0 bg-black text-white px-3 py-1 rounded-xl text-sm"
          >
            Copy
          </button>
        </div>

        {/* options */}
        <div className="flex flex-col gap-2 text-black">
          <div>
            <input type="range" 
            min={6}
            max={20}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <span>Length: {length}</span>
            <input type="number" className="w-16 p-1 ml-2 rounded-md outline-none" min="4" max="20" />
          </div>
          <div>
            <label className="mr-4">
              <input type="checkbox" className="mr-2" /> Numbers
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Passwordgen
