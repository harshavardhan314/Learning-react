import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <Header></Header>
      <div className="middle">
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
