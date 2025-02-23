import React from 'react'

const ExploreCard = ({explorecard_bg_img,explorecard_title}) => {
  return (
    <div className='explore_card w-full h-80 bg-no-repeat bg-cover flex flex-col items-center pt-32 md:w-1/2' style={{backgroundImage:`url(${explorecard_bg_img})`}}>
        <p className='font-Pop font-bold text-base text-white md:text-lg'>Promotion</p>
        <h1 className='mt-3 mb-5 font-Vol font-bold text-3xl text-white md:text-4xl'>{explorecard_title}</h1>
        <button className='w-36 h-10 border-1-s border border-solid rounded border-white font-Pop font-semibold text-sm text-white md:w-44'>View Packages</button>
    </div>
  )
}

export default ExploreCard