import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import ProdutosComponent from './containers/Produtos'
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

  const produtos = useSelector((state: any) => state.produtos || [])
  const carrinho = useSelector((state: any) => state.cart.items)
  const favoritos = useSelector((state: any) => state.favorites.items)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => {
        // Você pode adicionar lógica aqui para manipular os dados
        // Por exemplo, salvar os produtos no estado ou fazer algo com a resposta
        console.log(res) // Apenas um exemplo de log
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
        <ProdutosComponent
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
