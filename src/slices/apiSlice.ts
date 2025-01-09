// src/slices/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Configuração da API
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }), // Alterado para localhost:4000
  endpoints: (builder) => ({
    getProdutos: builder.query({
      query: () => '/produtos' // Ajuste para buscar a lista de produtos
    })
  })
})

export const { useGetProdutosQuery } = apiSlice
