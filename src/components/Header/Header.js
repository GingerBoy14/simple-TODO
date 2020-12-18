import { useEffect, useState } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import { useStoreTasksContext } from 'context'
import { Filter } from '../'

const { Title, Text } = Typography

const Header = () => {
  const { store } = useStoreTasksContext()
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setCounter(store.tasks.filter(({ status }) => status.done).length)
  }, [store])

  return (
    <>
      <Row>
        <Col flex={1}>
          <Space direction="vertical" align="center" style={{ width: '100%' }}>
            <Title>Todo List</Title>
          </Space>
        </Col>
      </Row>
      <Row wrap={false}>
        <Col span={12}>
          <Space direction="vertical" align="start" style={{ width: '100%' }}>
            <Title level={4}>
              <Text type="success">{counter} done</Text>
              <Text strong> / from {store.tasks.length - counter}</Text>
            </Title>
          </Space>
        </Col>
        <Col span={12}>
          <Space direction="vertical" align="end" style={{ width: '100%' }}>
            <Filter />
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default Header
