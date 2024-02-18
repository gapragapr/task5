import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const usersList = createSlice({
    name: 'usersList',
    initialState: {
        users: [],
        isFirstQuery: true
    },
    reducers: {
        setQueryBoolean: (state, action) => {
            state.isFirstQuery = action.payload.boolean
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.getUsers.matchFulfilled, (state, action) => {
            if (action.payload.isFirstQuery) {
                state.users = Array.from(new Set(action.payload.users));
            } else {
                Array.from(new Set(action.payload.users)).forEach(user => {
                    state.users.push(user);
                });
            }
            
        })
    }
})

export const {setQueryBoolean} = usersList.actions

export default usersList.reducer