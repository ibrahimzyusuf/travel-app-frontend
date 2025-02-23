import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Packages from "./Pages/Packages/Packages";

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/packages' element={<Packages/>} />
    </Routes>
    </>
  )
}

export default App
