import React from 'react'
import ReactDOM from 'react-dom/client' // Alteração aqui para 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'

// Criando o root da aplicação com 'createRoot' (novo método recomendado)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
