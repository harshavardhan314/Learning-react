import React, { useState } from 'react'

const Back = () => {
  const [color, setColor] = useState("white")

  return (
    <div 
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: color }}>
      <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Choose a Color</h1>

        <button 
          className="bg-black text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-amber-800 transition"
          onClick={() => setColor("black")}
        >
          Black
        </button>

        <button 
          className="bg-amber-500 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-amber-600 transition"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>

        <button 
          className="bg-pink-400 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-pink-500 transition"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
      </div>
    </div>
  )
}

export default Back
