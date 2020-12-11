import { Row, Col } from 'antd'
import { useEffect, useState } from 'react'
import { Typography } from 'antd'
import { useStoreContext } from 'context'
import { Filter } from '../Filter'

const { Title } = Typography

const Header = () => {
  const { store } = useStoreContext()
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    setCounter(store.tasks.filter(({ status }) => status.done).length)
  }, [store])
  return (
    <Row>
      <Col flex={1}>
        <Row>
          <Col flex={1}>
            <Title>Todo List</Title>
          </Col>
        </Row>
        <Row>
          <Col flex={1}>
            <Title level={5}>
              {store.tasks.length - counter} more to do, {counter} done
            </Title>
          </Col>
          <Col>
            <Filter />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
