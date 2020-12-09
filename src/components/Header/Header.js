import { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import { useStoreContext } from 'context'
import { Filter } from 'components/Filter'
import firebase from '../../config'

const { Title, Text } = Typography

const Header = () => {
  const { store } = useStoreContext()
  const [firebaseTasks, setFirebaseTasks] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        setFirebaseTasks(
          snapshot.docs.map((doc) => ({
            id: store.tasks.id,
            ...doc.data()
          }))
        )
      })
    return () => unsubscribe()
  }, [])

  const doneTasks = firebaseTasks.filter(({ status }) => status.done)

  return (
    <>
      <Row>
        <Col flex="auto" align="center">
          <Title>Todo List</Title>
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <Title level={4}>
            <Text>
              {doneTasks.length} from {firebaseTasks.length} are done
            </Text>
          </Title>
        </Col>
        <Col flex="none">
          <Filter />
        </Col>
      </Row>
    </>
  )
}

export default Header
