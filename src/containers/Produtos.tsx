import React from 'react'
import ProdutoComponent, { Produto } from '../components/Produto' // Corrigindo a importação

interface ProdutosComponentProps {
  produtos: Produto[] // Usando a interface Produto do componente Produto
  favoritos: Produto[]
  favoritar: (produto: Produto) => void
  adicionarAoCarrinho: (produto: Produto) => void
}

const ProdutosComponent: React.FC<ProdutosComponentProps> = ({
  produtos,
  favoritos,
  favoritar,
  adicionarAoCarrinho
}) => {
  return (
    <div>
      {produtos.map((produto) => (
        <ProdutoComponent key={produto.id} produto={produto} />
      ))}
    </div>
  )
}

export default ProdutosComponent
