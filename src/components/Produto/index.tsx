import React from 'react'

// Definindo a interface Produto diretamente aqui
export interface Produto {
  id: string
  nome: string
  preco: number
  imagem: string
  // Outros campos que você tenha no produto, como descrição, categoria, etc.
}

interface ProdutoProps {
  produto: Produto
}

const ProdutoComponent: React.FC<ProdutoProps> = ({ produto }) => {
  return (
    <div>
      <h3>{produto.nome}</h3>
      <p>{produto.preco}</p>
    </div>
  )
}

export default ProdutoComponent
