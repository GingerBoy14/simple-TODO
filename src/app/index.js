import GlobalStyle from './style'
import { Box } from '../components'
import { Header, Search, Filter, AddTodo } from './components'

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
        <AddTodo />
      </Box>
    </Box>
  )
}

export default App
