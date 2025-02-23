import React from 'react'

const SectionHead = ({sec_title,sec_subtitle,sec_class}) => {
  return (
    <div className='section_head w-full mt-12 mb-12 flex flex-col  gap-3'>
        <h1 className='sec_title font-Pop font-semibold text-lg text-red-500'>{sec_title}</h1>
        <h2 className={`${sec_class}`}>{sec_subtitle}</h2>
    </div>
  )
}

export default SectionHead