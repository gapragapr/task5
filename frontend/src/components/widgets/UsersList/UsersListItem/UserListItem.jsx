

import React from 'react'

const UserListItem = ({user}) => {
    return (
      <div className='grid grid-cols-5 gap-5 mb-6'>
        <p className='text-2xl' title={user.index}>{user.index}</p>
        <p className='text-2xl' title={user.id}>{user.id}</p>
        <p className='text-2xl' title={user.fullName}>{user.fullName}</p>
        <p className='text-2xl' title={user.address}>{user.address}</p>
        <p className='text-2xl' title={user.phoneNumber}>{user.phoneNumber}</p>
      </div>
    )
}

export default UserListItem