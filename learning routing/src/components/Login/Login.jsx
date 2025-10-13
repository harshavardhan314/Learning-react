

import React, { useContext } from 'react'
import { UserContext } from '../context/SoreContextProvider'  // make sure this path and name are correct

const Login = () => {
  const { name } = useContext(UserContext);   

  return (
    <div>
      <h2>Welcome, {name}!</h2>
    </div>
  )
}

export default Login
