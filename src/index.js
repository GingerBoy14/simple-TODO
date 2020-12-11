// import App from './components'
import Forms from './components'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'context'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={{ tasks: [], filter: 'all', query: '' }}>
      {/*<App />*/}
      <Forms />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
