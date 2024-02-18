import { configureStore } from '@reduxjs/toolkit'
import { api } from '../api/api'

import appParams from './slices/appParams'
import usersList from './slices/usersList'

const store = configureStore({
    reducer: {
        appParams: appParams,
        usersList: usersList,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware)
    }
})

export default store