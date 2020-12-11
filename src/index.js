import React from 'react'
import ReactDOM from 'react-dom'
import App from './components'
import { Provider } from 'context/TodoListContext'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={{ tasks: [], filter: 'all', query: '' }}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
