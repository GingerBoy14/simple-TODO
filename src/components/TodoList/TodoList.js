import { useState, useEffect } from 'react'
import { Row, Col, List } from 'antd'
import { TodoListItem } from '../TodoListItem'
import { filter } from '../../utilities'
import './style.css'
import { useStoreContext } from '../../context'

const TodoList = () => {
  const [filteredTasks, setFilteredTasks] = useState()
  const { store } = useStoreContext()
  useEffect(() => {
    filter(store, setFilteredTasks)
  }, [store])

  return (
    <div style={{ maxHeight: '400px', overflow: 'auto' }} className="style-1">
      <Row gutter={[0, 0]}>
        <Col span={24}>
          <List
            size="large"
            bordered={false}
            style={{ maxWidth: '100%', alignItems: 'center' }}
            dataSource={filteredTasks}
            renderItem={(item) => {
              return <TodoListItem item={item} />
            }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default TodoList
