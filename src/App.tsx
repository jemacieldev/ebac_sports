// src/App.tsx
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { addItemToCart } from './slices/cartSlice'
import { toggleFavorite } from './slices/favoritesSlice'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  const produtos = useSelector((state: any) => state.produtos)
  const carrinho = useSelector((state: any) => state.cart.items)
  const favoritos = useSelector((state: any) => state.favorites.items)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => {
        // Simulando a adição de produtos à store
        // Caso seja necessário armazenar os produtos na store, crie um slice para isso
        // dispatch(setProdutos(res)) // ex: uma ação para adicionar os produtos na store
      })
  }, [])

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(addItemToCart(produto))
  }

  function favoritar(produto: Produto) {
    dispatch(toggleFavorite(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
