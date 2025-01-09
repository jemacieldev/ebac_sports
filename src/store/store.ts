// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'
import favoritesReducer from '../slices/favoritesSlice'
import { apiSlice } from '../slices/apiSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

// Tipos para uso com TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
