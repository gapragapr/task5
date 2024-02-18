import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const appParams = createSlice({
    name: 'appParams',
    initialState: {
      defaultRegion: 'ru',
      defaultFakeDataCount: 20,
      region: null,
      fakeDataCount: 10,
      seed: Math.floor(Math.random() * 1000),
      mistakesCount: 0,
      pageIndex: 1 
    },
    reducers: {
        setAppParam: (state, action) => {
            state[action.payload.param] = action.payload.value
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.getUsers.matchFulfilled, (state, action) => {
            if (action.payload.isFirstQuery) {
                state.pageIndex = 1
            } else {
                state.pageIndex = state.pageIndex + 1
            }
        })
    }
})

export const { setAppParam } = appParams.actions

export default appParams.reducer