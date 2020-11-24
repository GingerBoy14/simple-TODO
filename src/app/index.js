import GlobalStyle from './style'
import { Typography, Box, Button } from '../components'

const { Text, Title } = Typography

const App = () => {
  return (
    <Box alignItems={'center'}>
      <Box width={{ _: 1, sm: '520px', md: '450px' }}>
        <GlobalStyle />
        <Title>Workshop</Title>
        <Text done>Todo List</Text>
        <Button type="primary">
          <Text>Add Todo</Text>
        </Button>
        <Button type="outline">Add Todo</Button>
        <Button>Add Todo</Button>
      </Box>
    </Box>
  )
}

export default App
