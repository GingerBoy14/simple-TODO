import GlobalStyle from './style'
import { Box } from 'base-components'
import { Header, Search, Filter, AddTodo, TodoList } from './components'

const App = () => {
  return (
    <Box alignItems={'center'}>
      <Box width={{ _: 1, sm: '520px', md: '450px' }}>
        <GlobalStyle />
        <Header />
        <Box flexDirection="row">
          <Search />
          <Filter />
        </Box>
        <TodoList />
        <AddTodo />
      </Box>
    </Box>
  )
}

export default App
