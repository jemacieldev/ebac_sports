// src/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Produto>) => {
      const itemExists = state.items.some(
        (item) => item.id === action.payload.id
      )
      if (!itemExists) {
        state.items.push(action.payload)
      }
    },
    removeItemFromCart: (state, action: PayloadAction<Produto>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
