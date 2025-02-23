import React from 'react'

const Button = ({btn_title}) => {
  return (
    <button className='w-40 h-11 bg-red-500 font-Pop font-semibold rounded text-white'>{btn_title}</button>
  )
}

export default Button