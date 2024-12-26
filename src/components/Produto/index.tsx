// src/containers/Produtos.tsx
import { Produto } from '../../App'

interface ProdutosProps {
  produtos: Produto[]
  favoritos: Produto[]
  favoritar: (produto: Produto) => void
  adicionarAoCarrinho: (produto: Produto) => void
}

const Produtos: React.FC<ProdutosProps> = ({ produtos, favoritos, favoritar, adicionarAoCarrinho }) => {
  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco}</p>
          <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
          <button onClick={() => favoritar(produto)}>
            {favoritos.some((fav) => fav.id === produto.id) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Produtos
