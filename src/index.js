import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { Provider } from 'context'

ReactDOM.render(
  <React.StrictMode>
    <Provider
      user={{
        idUser: '',
        userName: '',
        dateOfBirth: ''
      }}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
