import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Provider } from './app/context'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={{ tasks: [] }}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
