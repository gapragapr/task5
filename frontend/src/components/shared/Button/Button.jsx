import React from 'react'

const Button = ({children, onClick}) => {
    return (
      <button onClick={onClick} className='bg-gray-700 text-white px-6 py-3 ml-3 rounded-md'>
        {children}
      </button>
    )
}

export default Button