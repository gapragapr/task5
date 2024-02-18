

import React from 'react'

const UserListItem = ({user}) => {
    return (
      <div className='grid grid-cols-5 gap-5 mb-6'>
        <p title={user.index}>{user.index}</p>
        <p title={user.id}>{user.id}</p>
        <p title={user.fullName}>{user.fullName}</p>
        <p title={user.address}>{user.address}</p>
        <p title={user.phoneNumber}>{user.phoneNumber}</p>
      </div>
    )
}

export default UserListItem