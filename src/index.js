import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import { Provider } from './app/context'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={{ tasks: [], filter: 'all', query: '' }}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
