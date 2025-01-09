import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../components/Produto'

interface FavoritesState {
  items: Produto[] // Lista de produtos no estado
}

const initialState: FavoritesState = {
  items: []
}

// Criando o slice de favoritos
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Produto>) => {
      state.items.push(action.payload)
    },
    removeFromFavorites: (state, action: PayloadAction<Produto>) => {
      // Filtra o item para removê-lo dos favoritos
      state.items = state.items.filter(
        (item: Produto) => item.id !== action.payload.id
      )
    }
  }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
