import React, { useState } from 'react' // Adicionando a importação do React
import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

// Ajustando as importações de carrinho e favorito
import { adicionaCarrinho } from '../../store/reducers/carrinho' // Certifique-se de que está exportado corretamente
import { adicionaFavorito } from '../../store/reducers/favorito' // Certifique-se de que está exportado corretamente

export type PropsFav = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: PropsFav) => {
  const dispatch = useDispatch()

  const [estaFavoritado, setEstaFavoritado] = useState(false)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          dispatch(adicionaFavorito(produto)) // Ajustado para garantir a importação correta
          setEstaFavoritado(!estaFavoritado)
        }}
        type="button"
      >
        {estaFavoritado
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionaCarrinho(produto))} // Ajustado para garantir a importação correta
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
