import React from 'react'
import { GlobalStyle } from './styles/styles' // Certificando-se de que o GlobalStyle está correto
import { useGetProdutosQuery } from './slices/apiSlice' // Importando o hook para obter produtos
import Header from './components/Header'
import ProdutosComponent from './containers/Produtos'
import { Produto } from './components/Produto'

const App: React.FC = () => {
  // Ajuste: passando um objeto vazio, se necessário, para `useGetProdutosQuery()`
  const { data: produtos, isLoading, error } = useGetProdutosQuery({})

  // Definindo arrays de produtos com os tipos corretos
  const favoritos: Produto[] = []
  const carrinho: Produto[] = []

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        {isLoading && <p>Carregando produtos...</p>}
        {error && <p>Erro ao carregar produtos. Tente novamente mais tarde.</p>}
        {!isLoading && !error && produtos && (
          <ProdutosComponent
            produtos={produtos}
            favoritos={favoritos}
            favoritar={() => {}}
            adicionarAoCarrinho={() => {}}
          />
        )}
      </div>
    </>
  )
}

export default App
