import { Row, Col, Grid, Space, Button } from 'antd'
import { AddTodo } from '../AddTodo'
import { Header } from '../Header'
import 'antd/dist/antd.css'
import { TodoList } from '../TodoList'
import { Search } from '../Search'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import { Provider } from '../../context'

const App = () => {
  const [error, setError] = useState('')
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }
  return (
    <Provider store={{ tasks: [], filter: 'all', query: '' }}>
      <Row gutter={[0, 8]}>
        <Col style={{ width: '100%' }}>
          <Header />
        </Col>
      </Row>
      <Row gutter={[0, 8]}>
        <Col flex="auto">
          <Search />
        </Col>
      </Row>
      <Row gutter={[0, 8]}>
        <Col flex={1}>
          <TodoList />
        </Col>
      </Row>
      <Row gutter={[0, 8]}>
        <Col flex={1}>
          <AddTodo />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Button
            variant="link"
            onClick={handleLogout}
            type="primary"
            className="w-100">
            Log Out
          </Button>
        </Col>
      </Row>
    </Provider>
  )
}

export default App