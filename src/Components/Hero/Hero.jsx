import React from 'react'
import NavBar from '../NavBar/NavBar'

const Hero = ({hero_bg,hero_title,hero_class}) => {
  return (
    <div className='hero w-full h-screen bg-no-repeat bg-cover pt-8 flex flex-col  text-center' style={{backgroundImage:`url(${hero_bg})`}}>
      <NavBar/>
      <h2 className={`${hero_class}`}>{hero_title}</h2>
    </div>
  )
}

export default Hero