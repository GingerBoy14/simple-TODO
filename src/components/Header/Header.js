import { useEffect, useState } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import { useStoreContext } from 'context'
import { Filter } from 'components/Filter'
const { Title, Text } = Typography

const Header = () => {
  const { store } = useStoreContext()
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    setCounter(store.tasks.filter(({ status }) => status.done).length)
  }, [store])
  return (
    <>
      <Row>
        <Col flex="auto" align="center">
          <Title>Todo List</Title>
        </Col>
      </Row>
      <Row>
        <Col flex={'auto'}>
          <Title level={4}>
            <Text type="success">{counter} done</Text>
            <Text strong> / from {store.tasks.length - counter}</Text>
          </Title>
        </Col>
        <Col flex={'none'}>
          <Filter />
        </Col>
      </Row>
    </>
  )
}

export default Header
