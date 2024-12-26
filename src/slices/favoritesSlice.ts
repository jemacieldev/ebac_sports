// src/slices/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface FavoritesState {
  items: Produto[]
}

const initialState: FavoritesState = {
  items: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Produto>) => {
      const isFavorite = state.items.some((item) => item.id === action.payload.id)
      if (isFavorite) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else {
        state.items.push(action.payload)
      }
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
