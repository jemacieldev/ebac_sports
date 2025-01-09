import { createSlice, PayloadAction } from '@reduxjs/toolkit' // Importando corretamente createSlice e PayloadAction
import { Produto } from '../components/Produto'

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

// Criando o slice de carrinho com tipos e funções corretamente configuradas
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Função para adicionar item ao carrinho
    addItemToCart: (state, action: PayloadAction<Produto>) => {
      state.items.push(action.payload)
    },
    // Função para remover item do carrinho
    removeItemFromCart: (state, action: PayloadAction<Produto>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
