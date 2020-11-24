import GlobalStyle from './style'
import { Typography, Box, Button, Input, ButtonGroup } from '../components'

const { Text, Title } = Typography

const App = () => {
  return (
    <Box alignItems={'center'}>
      <Box width={{ _: 1, sm: '520px', md: '450px' }}>
        <GlobalStyle />
        <Title>Workshop</Title>
        <Text done>Todo List</Text>

        <ButtonGroup>
          <Button type="primary">
            <Text>Add Todo</Text>
          </Button>
          <Button type="outline">Add Todo</Button>
          <Button>Add Todo</Button>
        </ButtonGroup>
        <Input placeholder="What need to be done?" />
      </Box>
    </Box>
  )
}

export default App
