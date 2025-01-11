import React from 'react' // Importação do React
import { useSelector } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { store } from '../../store'

export type RootState = ReturnType<typeof store.getState>

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)
  const itensfav = useSelector((state: RootState) => state.favorito.itens)

  const valorTotal = itens.reduce((acc: any, item: { preco: any }) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensfav.length} favoritos</span>
        <img src={cesta} alt="Cesta" />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
