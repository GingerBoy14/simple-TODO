import { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import { useStoreContext } from 'context'
import { Filter } from 'components/Filter'
const { Title } = Typography

const Header = () => {
  const { store } = useStoreContext()
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log('store.tasks', store)
    // setCounter(store.tasks.filter(({ status }) => status.done).length)
  }, [store])
  return (
    <>
      <Row>
        <Col flex="auto" align="center">
          <Title>Todo List</Title>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col>
          <Title level={4}>
            {counter} / {store.tasks.length}
          </Title>
        </Col>
        <Col>
          <Filter />
        </Col>
      </Row>
    </>
  )
}

export default Header
