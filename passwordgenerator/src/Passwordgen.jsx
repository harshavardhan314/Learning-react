import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGen = () => {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [alpha, setAlpha] = useState(false)
  const [password, setPassword] = useState('')
  const [display, setDisplay] = useState(false)

  const passref=useRef()

  const generator = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const symbols = "@#$&"

    if (number) chars += numbers
    if (alpha) chars += symbols

    let res = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      res += chars[randomIndex]
    }

    setPassword(res)
  }, [length, alpha, number])

  useEffect(() => {
    generator()
  }, [generator])

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setDisplay(true)
    passref.current.select()
    setTimeout(() => setDisplay(false), 2000)
  }

  return (
    <div className="password-generator h-lvh bg-blue-900 text-white p-5 flex justify-center items-center flex-col">
      {display && (
        <h1 className="text-green-400 text-2xl mb-3">Copied successfully!</h1>
      )}

      <h1 className="text-4xl mb-10">Password Generator</h1>

      <div className="input-box ml-40">
        <input
          type="text"
          value={password}
          readOnly
          className="bg-white text-black  p-2.5 w-140 rounded-2xl border-none outline-none"
          ref={passref}
        />
        <button
          className="bg-blue-500 p-3 rounded-xl cursor-pointer ml-3"
          onClick={handleCopy}
        >
          Copy
        </button>

        <div className="options  flex items-center  justify-center ">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer justify-center items-center"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="text-2xl text-orange-500 m-5">
            Length: {length}
          </label>

          <div className=" flex justify-center items-center">
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <label className="text-2xl text-orange-500 m-5">Number</label>

            <input
              type="checkbox"
              className="cursor-pointer"
              checked={alpha}
              onChange={() => setAlpha((prev) => !prev)}
            />
            <label className="text-2xl text-orange-500 m-5"> Special Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordGen
