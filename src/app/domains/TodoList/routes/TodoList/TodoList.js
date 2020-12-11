import { Provider } from '../../context'
import { App } from '../../components/App'

const TodoList = () => {
  return (
    <Provider store={{ tasks: [], filter: 'all', query: '' }}>
      <App />
    </Provider>
  )
}

export default TodoList
