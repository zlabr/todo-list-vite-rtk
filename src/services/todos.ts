import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ky from 'ky'

import type { TodosList } from './types'

export const todosApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/todos',
    fetchFn: async (...args) => ky(...args),
  }),
  endpoints: (builder) => ({
    getTodosList: builder.query<TodosList, void>({
      query: () => `/`,
    }),
  }),
  reducerPath: 'todosApi',
})

export const { useGetTodosListQuery } = todosApi
