import React from 'react'
import { Link,NavLink } from "react-router-dom";
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const NavBar = () => {
  return (
    <div className='w-w90 mt-9 left-5 flex justify-between items-center absolute text-base text-white md:left-18 '>
      <Logo/>
      <ul className="hidden w-2/6 font-Pop font-normal md:flex justify-between items-center ">
        <NavLink  to="/" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>Home</li></NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>About</li></NavLink>
        <NavLink to="/packages" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>Packages</li></NavLink>
      </ul>
      <div className='hidden md:block'>
        <Button btn_title='Get in Touch' />
      </div>
      <div className='md:hidden'><i className="fa-solid fa-bars text-2xl"></i></div>
      {/* To Add
      <div className="mobile_menu  absolute w-36 h-48 bg-slate-700 p-5">
        <ul className='font-Pop font-normal text-lg flex flex-col items-center gap-5'>
          <NavLink  to="/" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>Home</li></NavLink>
          <NavLink  to="/about" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>About</li></NavLink>
          <NavLink  to="/packages" className={({isActive})=>isActive?'border-b-2 border-red-500':''}><li>Packages</li></NavLink>
        </ul>
      </div> */}
    </div>
  )
}

export default NavBar