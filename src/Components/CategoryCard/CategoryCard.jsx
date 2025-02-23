import React from 'react'

const CategoryCard = ({categorycard_img,categorycard_title,categorycard_description}) => {
  return (
    <div className='category_card w-full mt-5 sm:w-64 mb-5 flex flex-col items-center gap-2 text-center font-Pop'>
        <img src={categorycard_img} alt="" className='w-24'/>
        <h1 className="categorycard_title font-semibold text-xl text-black2">{categorycard_title}</h1>
        <p className="categorycard_description font-medium text-base text-gray1">{categorycard_description}</p>
    </div>
  )
}

export default CategoryCard

/* w-64 h-56 
w-24*/