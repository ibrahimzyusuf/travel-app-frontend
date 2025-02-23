import React from 'react'

const Hero = ({hero_bg,hero_title,hero_class}) => {
  return (
    <div className='hero w-full h-screen bg-no-repeat bg-cover flex items-center justify-center text-center' style={{backgroundImage:`url(${hero_bg})`}}>
        <h2 className={`${hero_class}`}>{hero_title}</h2>
    </div>
  )
}

export default Hero