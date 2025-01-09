import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
`

// Exportando cores, caso você precise
export const cores = {
  primary: '#FF5733',
  secondary: '#C70039',
  accent: '#900C3F',
  background: '#F0F0F0',
  textPrimary: '#212121',
  textSecondary: '#757575'
}
