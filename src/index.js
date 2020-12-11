import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components'
import { Provider } from 'context/TodoListContext'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Router>
    <Provider store={{ tasks: [], filter: 'all', query: '' }}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
