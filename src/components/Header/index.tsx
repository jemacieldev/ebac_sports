// src/components/Header.tsx
import { useSelector } from 'react-redux'

const Header = ({ favoritos, itensNoCarrinho }: any) => {
  return (
    <header>
      <div>
        <h1>Meu Carrinho</h1>
        <p>Itens no carrinho: {itensNoCarrinho.length}</p>
        <p>Favoritos: {favoritos.length}</p>
      </div>
    </header>
  )
}

export default Header
