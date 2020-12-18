import { AddTodo, Header, Search, TodoList } from '../'
import { TasksProvider } from 'context'
import { Row, Col, Button } from 'antd'
import { useStoreUserContext } from 'context'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const ToDo = () => {
  const { userStore, dispatch } = useStoreUserContext()
  const [currentUserState, setCurrentUserState] = useState(userStore.id)
  const history = useHistory()

  const handleLogOut = () => {
    setCurrentUserState(dispatch({ type: 'SIGN_OUT', payload: userStore.id }))
  }

  const isUser = () => {
    !currentUserState && history.push('/Login')
  }

  useEffect(() => isUser(), [userStore])

  return (
    <TasksProvider store={{ tasks: [], filter: 'all', query: '' }}>
      <Row justify="center">
        <Col xs={22} sm={22} md={14} lg={10} xl={9} xxl={8}>
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
          <Row>
            <Col flex={1}>
              <AddTodo />
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop: '10px' }}
                onClick={handleLogOut}>
                Sign Out
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </TasksProvider>
  )
}

export default ToDo
