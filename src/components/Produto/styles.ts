import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const Produto = styled.div`
  background-color: ${cores.background};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const Capa = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  margin-top: 10px;
  color: ${cores.primary};
`

export const Prices = styled.div`
  font-size: 16px;
  margin-top: 5px;
  color: ${cores.secondary};
`

export const Tag = styled.div`
  background-color: ${cores.accent};
  color: white;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 10px;
`

export const BtnComprar = styled.button`
  background-color: ${cores.accent};
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  &:hover {
    background-color: ${cores.primary};
  }
`
