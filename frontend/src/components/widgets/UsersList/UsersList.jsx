

import React, { useEffect, useState } from 'react'
import UserListItem from './UsersListItem/UserListItem'
import { useSelector } from 'react-redux'
import { useGetUsersMutation } from '../../../api/api'


const UsersList = () => {
    const {users} = useSelector(state => state.usersList)
    const queryParams = useSelector(state => state.appParams)
    const [endVisible, setEndVisible] = useState(false)

    const [getUsers] = useGetUsersMutation()

    useEffect(() => {
        (async() => {
            try {
                let params = {
                    region: queryParams.region || queryParams.defaultRegion,
                    seed: queryParams.seed,
                    mistakesCount: queryParams.mistakesCount,
                    fakeDataCount: queryParams.fakeDataCount,
                    pageIndex: queryParams.pageIndex,
                    isFirstQuery: true,
                }
                const response = await getUsers(params)      

            } catch (e) {
                console.log(e)
            }
        })()


    }, [])

    useEffect(() => {
        (async() => {
            try {
                let params = {
                    region: queryParams.region,
                    seed: queryParams.seed,
                    mistakesCount: queryParams.mistakesCount,
                    fakeDataCount: queryParams.defaultFakeDataCount,
                    pageIndex: queryParams.pageIndex > 0 ? 0 : queryParams.pageIndex,
                    isFirstQuery: true,
                }
        
                const response = await getUsers(params)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [queryParams.region, queryParams.mistakesCount, queryParams.seed])

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
               setEndVisible(true)
            } else {
                setEndVisible(false)
            }
        };
       
        window.addEventListener('scroll', handleScroll); 
      }, []);

    useEffect(() => {
        (async() => {
            try {
                let params = {
                    region: queryParams.region || queryParams.defaultRegion,
                    seed: queryParams.seed,
                    mistakesCount: queryParams.mistakesCount,
                    fakeDataCount: queryParams.fakeDataCount,
                    pageIndex: queryParams.pageIndex + 1,
                    isFirstQuery: false,
                };
                const response = await getUsers(params);
                console.log(queryParams.pageIndex)
            } catch (e) {
                console.log(e);
            }
        })()
    }, [endVisible])
    

    if (users.length < 1) {
        return <h1 className='text-center text-4xl uppercase mt-32 mb-32'>error</h1>
    }




    return (
      <div>
        <div className='grid grid-cols-5 gap-5 mb-6 mt-8 font-bold'>
            <p>Index</p>
            <p>Id</p>
            <p>Full name</p>
            <p>Address</p>
            <p>Phone number</p>
        </div>
        {users.map((user, index) => {
            return <UserListItem user={user} key={index} />
        })}
      </div>
    )
}

export default UsersList