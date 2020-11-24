import GlobalStyle from './style'
import { Typography } from '../components'

const { Text, Title } = Typography

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Title level={5}>Workshop</Title>
      <Text done>Todo List</Text>
    </div>
  )
}

export default App
