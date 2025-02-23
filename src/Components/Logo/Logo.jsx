import React from 'react'
import arrow_img from "../../assets/images/arrow.png";

const Logo = () => {
  return (
    <div className='logo relative '>
        <h1 className="logo_title font-Vol text-2xl font-bold md:text-3xl ">Travel</h1>
        <img src={arrow_img} alt="arrow" className='absolute w-20 h-3.5 top-5 left-4 md:w-28 ' />
    </div>
  )
}

export default Logo