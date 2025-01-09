import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const Container = styled.header`
  background-color: ${cores.primary};
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

export const Titulo = styled.h1`
  color: ${cores.secondary};
  font-size: 24px;
`

export const Botao = styled.button`
  background-color: ${cores.accent};
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`
