import App from './components'
// import Forms from './components'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'context'
import Index from './components'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={{ tasks: [], filter: 'all', query: '' }}>
      <Index />
      {/*<Forms />*/}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
