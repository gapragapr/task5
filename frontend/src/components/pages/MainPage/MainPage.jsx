import React from 'react'

import Wrapper from '../../shared/Wrapper/Wrapper'
import DropDownMenu from '../../widgets/DropDownMenu/DropDownMenu'
import Range from '../../widgets/Range/Range'
import Seed from '../../widgets/Seed/Seed'

import UsersList from '../../widgets/UsersList/UsersList'

const MainPage = () => {



    return (
        <Wrapper>
            <div className='flex justify-around items-center'>
                <DropDownMenu />
                <Range />
                <Seed />
            </div>
            <UsersList />

        </Wrapper>
    )
}

export default MainPage