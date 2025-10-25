import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyle'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { store } from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
