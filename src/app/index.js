import GlobalStyle from './style'
import { Typography } from '../components'

const { Title } = Typography

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Title>Todo List</Title>
    </div>
  )
}

export default App
