import React, { useState } from 'react'
import { Link,NavLink } from "react-router-dom";
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const NavBar = () => {

  const [isListOpen, setIsListOpen] = useState(false)
  return (
    <div className='w-w90 mt-9 left-5 flex justify-between items-center relative text-base text-white md:left-18 '>
      <Logo/>
      <ul className="hidden w-2/6 font-Pop font-normal md:flex justify-between items-center ">
        <NavLink  to="/" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>Home</li></NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>About</li></NavLink>
        <NavLink to="/packages" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>Packages</li></NavLink>
      </ul>
      <div className='hidden md:block'>
        <Button btn_title='Get in Touch' />
      </div>
      <div onClick={()=>{setIsListOpen(prev=>!prev)}} className='md:hidden'><i className="fa-solid fa-bars text-2xl"></i></div>
      
      {isListOpen && <div className="mobile_menu md:hidden  absolute right-0 top-6 w-28 h-40 bg-slate-700/75 rounded-sm flex items-center justify-center">
        <ul className='font-Pop font-normal text-sm sm:text-base flex flex-col justify-center items-center gap-5 mx-auto my-auto'>
          <NavLink  to="/" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>Home</li></NavLink>
          <NavLink  to="/about" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>About</li></NavLink>
          <NavLink  to="/packages" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>Packages</li></NavLink>
        </ul> 
      </div>}
    </div>
  )
}

export default NavBar
