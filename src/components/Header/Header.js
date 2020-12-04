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
        <Space direction="vertical" align="center" style={{ width: '100%' }}>
          <Col>
            <Title>Todo List</Title>
          </Col>
        </Space>
      </Row>
      <Row wrap={false}>
        <Space direction="vertical" align="start" style={{ width: '100%' }}>
          <Col>
            <Title level={4}>
              <Text type="success">{counter} done</Text>
              <Text strong> / from {store.tasks.length - counter}</Text>
            </Title>
          </Col>
        </Space>
        <Space direction="vertical" align="end" style={{ width: '100%' }}>
          <Col>
            <Filter />
          </Col>
        </Space>
      </Row>
    </>
  )
}

export default Header
