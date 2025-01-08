import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Configuração da API
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getProdutos: builder.query({
      query: () => '/produtos'
    })
  })
})

export const { useGetProdutosQuery } = apiSlice
