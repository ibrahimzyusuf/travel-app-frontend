import React from 'react'
import Button from '../Button/Button'

const TrendyCard = ({trendycard_img,trendycard_logo,trendycard_days,trendycard_users,trendycard_title,trendycard_description}) => {
  return (
    <div className='trendy_card w-full md:w-80 flex flex-col gap-4 mt-12 text-left'>
        <div className="picture w-full relative">
        <img src={trendycard_img} alt="trendy card imageg" className='w-full' loading='lazy' />
        <img src={trendycard_logo} alt="trendy card logo" className="trendycard_logo w-20 h-20 absolute -bottom-11" loading='lazy' />
        </div>
        <div className="info ml-5 flex items-center gap-8 font-Pop font-normal text-base text-gray1">
            <div className="calender flex items-center gap-2">
            <i class="fa-light fa-calendar"></i>{trendycard_days}
            </div>
            <div className="users flex items-center gap-2">
            <i class="fa-regular fa-user"></i>{trendycard_users}
            </div>
        </div>
        <div className="trendycard_def ml-5 flex items-center justify-between">
            <h1 className="trendycard_title font-Pop font-bold text-2xl text-black1">{trendycard_title}</h1>
            <div className="stars flex items-center text-yellow-400 mr-1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div className="final_sec ml-5 flex flex-col gap-5 text-xs">
          <p className="trendycard_description font-Pop font-normal text-sm text-gray2">{trendycard_description}</p>
          <Button btn_title='Explore Now'/>
        </div>
    </div>
  )
}

export default TrendyCard

/* w-98 h-98

w-98 h-64

top-56*/