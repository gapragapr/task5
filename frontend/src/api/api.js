import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `https://task5-server-49o1.onrender.com` }),
  endpoints: (builder) => ({
    getUsers: builder.mutation({
      query: (body) => ({
        url: 'getFakeData',
        method: 'POST',
        body
      })
    }),  
  })
});

export const {useGetUsersMutation} = api;
