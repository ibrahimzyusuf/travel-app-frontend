import React from 'react'

const PackagesCard = ({card_img,card_date,card_visitors,card_title,card_desc,card_price,card_rate}) => {
  return (
    <div className='packages_card w-full md:w-96 p-5 flex flex-col gap-5 bg-gray3'>
        <div className="top border-0 rounded">
            <img src={card_img} alt="" className='w-full' />
            <div className="info w-full h-10 rounded-b bg-red-500 flex items-center px-4 justify-between font-Pop font-medium text-xs text-white">
                <span className="date">{card_date}</span>
                <span className="visitors">{card_visitors}</span>
            </div>
        </div>
        <div className="down flex flex-col gap-4">
            <h1 className='font-Pop font-bold text-xl text-black2'>{card_title}</h1>
            <p className='font-Pop font-normal text-sm text-black2'>{card_desc}</p>
            <div className="price&rate flex items-center gap-8 font-Pop font-medium text-base text-black2">
                <span className="price">{card_price}</span>
                <div className='flex items-center gap-1'><span className="text-yellow-400"><i className="fa-solid fa-star "></i></span>{card_rate}</div>
            </div>
        </div>
    </div>
  )
}

export default PackagesCard