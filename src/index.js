import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './components'
import { UsersProvider } from 'context'
import 'antd/dist/antd.css'

ReactDOM.render(
  <UsersProvider userStore={{ id: '' }}>
    <Router>
      <App />
    </Router>
  </UsersProvider>,
  document.getElementById('root')
)
