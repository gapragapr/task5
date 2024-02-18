import React from 'react'

const Input = ({value, onChange, type}) => {
    return (
      <input className='w-20' type={type} value={value} onChange={onChange} />
    )
}

export default Input