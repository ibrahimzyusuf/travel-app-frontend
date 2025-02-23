import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Packages from "./Pages/Packages/Packages";

function App() {
  
  return (
    <BrowserRouter basename="/travel-app-frontend">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/packages' element={<Packages/>} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App
