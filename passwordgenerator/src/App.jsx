import { useState } from 'react'
import Passwordgen from './passwordgen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Passwordgen></Passwordgen>
  )
}

export default App
